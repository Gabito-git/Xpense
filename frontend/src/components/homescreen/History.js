import { useState } from "react"
import CustomSelect from "./CustomSelect"
import Transaction from "./Transaction"

const History = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="history">
            <div>
                <h2 className="history__title">History</h2>
                <div className="history__search"> 
                    <p className="history__text">Search by category: </p>
                    <div className="history__select-field">
                        <CustomSelect 
                            selectedOption={ selectedOption }
                            setSelectedOption={ setSelectedOption }
                        />
                    </div>                    
                </div>                
            </div>
            <Transaction />
        </div>
    )
}

export default History
