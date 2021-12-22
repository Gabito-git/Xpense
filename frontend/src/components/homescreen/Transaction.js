import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import ModifyMenu from "./ModifyMenu";

const Transaction = ({className}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="transaction">
            <div className="transaction__left">
                <h3 className="transaction__concept">Test transaction</h3>
                <p className="transaction__date">Today at 12:13 PM</p>
            </div>
            <div className="transaction__right">
                <p>Category</p>
                <p className={`transaction__value ${className}`}>USD <span>251</span></p>
                <BsThreeDots className="transaction__icon" onClick={ () => setIsOpen(true) }/>
            </div>
            {
                isOpen && (
                    <div onMouseLeave={ () => setIsOpen(false) }>
                        <ModifyMenu />
                    </div>
                )
            }
            
        </div>
    )
}

export default Transaction
