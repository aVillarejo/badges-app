import React from "react";

// *s
//?ededd

import Modal from "./Modal";
const DeleteBadgeModal = ({ onCloseModal, isOpenModal, onDelete }) => {
  return (
    <Modal onClose={onCloseModal} isOpen={isOpenModal}>
      <div className="DeleteVadgeModal">
        <h1>Are you Sure?</h1>
        <p>You are about to delete this badge.</p>

        <div className="d-flex justify-content-around">
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
          <button className="btn btn-info" onClick={onCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteBadgeModal;
