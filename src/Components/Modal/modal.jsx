import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

const Modal = ({ isOpen }) => {
  const navigate = useNavigate();

  const [show, setshow] = useState(false);

  useEffect(() => {
    setshow(isOpen);
  }, [isOpen]);


  const closeModal = () => {
    setshow(false);
    navigate("/list");
  };

  return (
    <div className={`modal ${show ? "show" : "hide"}`}>
      <div className="modal__content">
        <span className="modal__close" onClick={closeModal}>
          &times;
        </span>
        <h2 className="modal__title">Employee Created</h2>
        <p>Employee has been successfully created</p>
        <button onClick={closeModal} className="modal__button">
          Go to Employee List
        </button>
      </div>
    </div>
  );
};

export { Modal };
