import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import ModifyMenu from "./ModifyMenu";

const Transaction = ({style, concept, amount, date, category, transaction_id}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="transaction">
            <div className="transaction__left">
                <h3 className="transaction__concept">{ concept }</h3>
                <p className="transaction__date">{ new Date(date).toDateString() }</p>
            </div>
            <div className="transaction__right">
                <p>{ category }</p>
                <p className="transaction__value" style={ style }>USD <span>{ amount }</span></p>
                <BsThreeDots className="transaction__icon" onClick={ () => setIsOpen(true) }/>
            </div>
            {
                isOpen && (
                    <div onMouseLeave={ () => setIsOpen(false) }>
                        <ModifyMenu 
                            transactionId = { transaction_id }
                        />
                    </div>
                )
            }
            
        </div>
    )
}

export default Transaction
