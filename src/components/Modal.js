import React from "react";
import { createPortal } from "react-dom";

//Styles
import "./styles/Modal.css";

const Modal = props => {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={onClose} className="Modal__close-button">
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
