const { pool }   = require('../db/config');
const BadRequestError = require('../errors/bad-request-err');

const newTransaction = async(req, res) => {
    const { concept, amount, date, category, type} = req.body;

    try {
        const newTransaction = await pool.query(
            "INSERT INTO transactions (concept, amount, date, category, type) " +
            "VALUES($1, $2, $3, $4, $5) RETURNING *", [concept, amount, date, category, type]
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
    let incomes = 0, expenses = 0;
    
    try {
        const response     = await pool.query("SELECT * FROM transactions ORDER BY date DESC");
        const transactions = response.rows;

        transactions.forEach( transaction => {
            incomes += transaction.type === 'income' ? transaction.amount: 0;
            expenses += transaction.type === 'expense' ? transaction.amount: 0;
        } )

        const total = +(incomes - expenses).toFixed(2);
        if ( transactions.length > 10 ) transactions.length = 10;

        res.status(200).json({            
            total,
            incomes,
            expenses,
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
    const { category } = req.params;
    
    try {
        const transactions = await pool.query(
            "SELECT * FROM transactions WHERE category=$1", [ category ]
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