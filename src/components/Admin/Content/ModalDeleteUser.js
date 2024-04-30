import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);
    console.log(dataDelete);

    const handleSubmitDeleteUser = async () => {
        let data = await deleteUser(dataDelete.id);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetchListUsers();
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete this User ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user. Email = <b>{dataDelete && dataDelete ? dataDelete.email : ""}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { handleSubmitDeleteUser() }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;