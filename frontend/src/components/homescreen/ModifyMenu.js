import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const ModifyMenu = () => {
    return (
        <div className="modify animate__animated animate__bounceIn">
            <div className="modify__left">
                <GrUpdate />
                <p>Update</p>
            </div>
            <div className="modify__right">
                <MdDeleteForever/>
                <p>Delete</p>
            </div>
        </div>
    )
}

export default ModifyMenu
