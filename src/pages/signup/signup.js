import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Yeezy from "../../assets/img/shoes/yeezy.png";
import product1 from "../../assets/img/shoes/product1.png";
import { Link, useNavigate } from "react-router-dom";
import { AllBrands } from "../../helpers/api";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import login from "../../assets/img/login.png"
import googleicon from "../../assets/img/googleicon.png"

import '../../assets/css/blurredbackground.css';

function BlurredBackgroundModal() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <div className="modal-demo">
            <button className="open-modal-btn" onClick={handleOpenModal}>
                Open Modal
            </button>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="modal-content">
                            <button className="close-modal-btn" onClick={handleCloseModal}>
                                &times;
                            </button>
                            <h2>Modal Title</h2>
                            <p>This is the modal content.</p>
                            <div className="modal-buttons">
                                <button className="close-btn" onClick={handleCloseModal}>
                                    Close
                                </button>
                                <button className="save-btn">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}








const SignUp = (props) => {
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="pt-100 pb-100">
        <BlurredBackgroundModal></BlurredBackgroundModal>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default SignUp;





