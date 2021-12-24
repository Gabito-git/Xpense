import { useContext } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

import { deleteTransaction, setToModify } from "../../actions/transactions";
import { TransactionContext } from "../../context/transactionContext";

const ModifyMenu = ({ transactionId }) => {

    const { dispatch } = useContext(TransactionContext);

    const handleDelete = async() => {
        const answer = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        })

        if( answer.isConfirmed ){
            try {
                const response = await fetch(`http://localhost:4000/api/transactions/${ transactionId }`, {
                    method: 'DELETE'
                })
                
                const resp = await response.json();
    
                if(resp.errors){
                    return Swal.fire(
                        'Oops...', resp.errors[0].message, 'error'
                    )
                }
        
                dispatch( deleteTransaction( transactionId ) );
                
            } catch (error) {
                console.log(error)
            }
        }else{
            return;
        }    
    }

    const handleUpdate = () => {      
        dispatch( setToModify( transactionId ) )
    }

    return (
        <div className="modify animate__animated animate__bounceIn">
            <div 
                className="modify__left"
                onClick={ handleUpdate }
            >
                <GrUpdate />
                <p>Update</p>
            </div>
            <div 
                className="modify__right"
                onClick={ handleDelete }
            >
                <MdDeleteForever/>
                <p>Delete</p>
            </div>
        </div>
    )
}

export default ModifyMenu
