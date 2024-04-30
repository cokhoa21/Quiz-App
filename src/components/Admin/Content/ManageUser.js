import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FiPlusCircle } from "react-icons/fi";
import { useState, useEffect } from 'react';
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataDelete, setDataDelete] = useState({});

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataView(user);
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }

    useEffect(() => {
        fetchListUsers();
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }

    const resetDataUpdate = () => {
        setDataUpdate({});
    }

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
                    <TableUser listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        dataUpdate={dataUpdate}
                        dataView={dataView}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetDataUpdate={resetDataUpdate}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                    fetchListUsers={fetchListUsers}
                    resetDataUpdate={resetDataUpdate}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}

export default ManageUser;