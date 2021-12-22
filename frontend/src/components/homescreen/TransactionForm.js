import  Button from '../../components/Button';

const TransactionForm = () => {
    return (
        <div className="transaction-form">
            <h2 className="transaction-form__title"> New Transaction </h2>

            <form>
                <div className="transaction-form__group">
                    <label> Name </label>
                    <div className="transaction-form__input-div">
                        <input className="transaction-form__input" />
                    </div>
                </div>
                <div className="transaction-form__group">
                    <label> Amount (use "-" for expenses) </label>
                    <div className="transaction-form__input-div">
                        <input className="transaction-form__input" />
                    </div>
                </div>
                <Button 
                    text="Add transaction"
                    className="transaction-form__button"
                />
            </form>

        </div>
    )
}

export default TransactionForm
