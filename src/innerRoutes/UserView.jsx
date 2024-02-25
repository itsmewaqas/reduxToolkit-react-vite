import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function UserView({ id, viewUser, setViewUser }) {

    const userDetail = useSelector((state) => state.userDetail);
    const singleUser = userDetail.userDetail.filter((x) => x.id === id);

    return (
        <Modal
            show={viewUser}
            onHide={() => setViewUser()}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>User Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{singleUser[0].name}</p>
                <p>{singleUser[0].email}</p>
                <p>{singleUser[0].cell}</p>
                <p>{singleUser[0].usertype}</p>
                <p>{singleUser[0].address}</p>
                <p>{singleUser[0].gender}</p>
                <p>{singleUser[0].education.toString().split(',  ')}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setViewUser()}>Close</Button>
                <Button variant="primary">Update</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserView;


