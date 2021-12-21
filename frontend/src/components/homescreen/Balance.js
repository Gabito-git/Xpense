const Balance = () => {
    return (
        <div className="balance">
            <div className="balance__top">
                <div className="balance__trans-info balance__trans-info--income">
                    <h2>INCOMES</h2>
                    <p>USD<span> 2500</span></p>
                </div>
                <div className="balance__trans-info balance__trans-info--expense">
                    <h2>EXPENSES</h2>
                    <p>USD<span> 1200</span></p>
                </div>
            </div>
            <div className="balance__bottom">
                <div className="balance__trans-info balance__trans-info--total">
                   <h2>USD 350</h2>
                   <p>Total Balance</p>
                </div>
            </div>
            
        </div>
    )
}

export default Balance
