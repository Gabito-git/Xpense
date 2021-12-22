import { BsThreeDots } from "react-icons/bs";

const Transaction = () => {
    return (
        <div className="transaction">
            <div className="transaction__left">
                <h3 className="transaction__concept">Test transaction</h3>
                <p className="transaction__date">Today at 12:13 PM</p>
            </div>
            <div className="transaction__right">
                <p className="transaction__value">USD <span>251</span></p>
                <BsThreeDots />
            </div>
        </div>
    )
}

export default Transaction
