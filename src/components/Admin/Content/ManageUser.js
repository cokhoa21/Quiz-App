import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FiPlusCircle } from "react-icons/fi";
import { useState } from 'react';
import TableUser from "./TableUser";

const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-users-container">
            <div className="title">
                Manage Users
            </div>
            <div className="users-content">
                <div className="btn-add-new" >
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}> <FiPlusCircle /> Add new users</button>
                </div>
                <div className="table-users-container">
                    <TableUser />
                </div>
                <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser}></ModalCreateUser>
            </div>
        </div>
    )
}

export default ManageUser;