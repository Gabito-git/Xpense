const { pool }   = require('../db/config');

const newTransaction = async(req, res) => {
    const { concept, amount, date, category, type} = req.body;

    try {
        const newTransaction = await pool.query(
            "INSERT INTO transactions (concept, amount, date, category, type) " +
            "VALUES($1, $2, $3, $4, $5) RETURNING *", [concept, amount, date, category, type]
        )
        res.status(201).json({ ...newTransaction.rows[0] });
    } catch (error) {
        console.log(error)
    }
}

const getTransactions = async(req, res) => {
    let incomes = 0, expenses = 0;
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
}

module.exports = {
    newTransaction,
    getTransactions
}