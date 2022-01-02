const { pool }   = require('../db/config');
const BadRequestError = require('../errors/bad-request-err');

const newTransaction = async(req, res) => {
    const { user_id } = req.currentUser;
    const { concept, amount, date, category, type} = req.body;

    try {
        const newTransaction = await pool.query(
            "INSERT INTO transactions (user_id, concept, amount, date, category, type) " +
            "VALUES($1, $2, $3, $4, $5, $6) RETURNING *", [user_id, concept, amount, date, category, type]
        )
        res.status(201).json({...newTransaction.rows[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json(
            {   
                errors: [{
                    message: 'Please contact the admin'
                }] 
            }
        )
    }
}

const getTransactions = async(req, res) => {    
    const { user_id } = req.currentUser;

    try {
        const response     = await pool.query(
            "SELECT * FROM transactions WHERE user_id =$1 ORDER BY date DESC LIMIT 10",
            [user_id]
            );
        const transactions = response.rows;
      
        res.status(200).json({           
            transactions
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(
            {   
                errors: [{
                    message: 'Please contact the admin'
                }] 
            }
        )
    }
    
}

const updateTransaction = async(req, res) => {
    const { concept, amount, date, category} = req.body;
    const { id } = req.params;
    let updatedTransaction

    try {
         updatedTransaction = await pool.query(
            "UPDATE transactions "  +
            "SET concept = $1, "    +
                "amount  = $2, "    +
                "date    = $3, "    +
                "category= $4 "     +
            "WHERE transaction_id = $5  RETURNING *",
            [concept, amount, date, category, id]
        )        
        
    } catch (error) {
        console.error(error);
        res.status(500).json(
            {   
                errors: [{
                    message: 'Please contact the admin'
                }] 
            }
        )
    }

    if( updatedTransaction.rowCount === 0 ){
        throw new BadRequestError('Transaction not found');
    }
    
    res.status(200).json({...updatedTransaction.rows[0]});

}

const deleteTransaction = async(req, res) => {
    let response;
    const { id } = req.params;

    try {
        response = await pool.query(
            'DELETE FROM transactions WHERE transaction_id=$1',
            [id]
        )

    } catch (error) {
        console.log(error);
        res.status(500).json(
            {   
                errors: [{
                    message: 'Please contact the admin'
                }] 
            }
        )
    }

    if( response.rowCount === 0 ){
        throw new BadRequestError('Transaction not found');
    } 

    res.status(200).json({ok: true})
}

const searchByCategory = async(req, res) => {
    const { user_id } = req.currentUser;
    const { category } = req.params;
    let transactions;
    
    try {      
        transactions = await pool.query(
            "SELECT * FROM transactions WHERE category=$1 AND user_id = $2", 
            [ category, user_id]
        )              
 
        res.status(200).json({ transactions: transactions.rows })

    } catch (error) {
        console.log(error);
        res.status(500).json(
            {   
                errors: [{
                    message: 'Please contact the admin'
                }] 
            }
        )
    }
}

module.exports = {
    newTransaction,
    getTransactions, 
    updateTransaction,
    deleteTransaction,
    searchByCategory
}