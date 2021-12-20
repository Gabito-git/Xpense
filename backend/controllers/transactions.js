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

module.exports = {
    newTransaction
}