import React, { useEffect, useState } from "react";

import HomeIcon from "../../assets/img/icons/home.png";
import RightarrowWhite from "../../assets/img/icons/rightarrowwhite.png"

const HeaderTwo = (props) => {


    return (
        <div className={`d-flex flex-row ${props.center ? "justify-content-center" : null} align-items-center header-with-brand pb-80`}>

            <img className="homeIcon" src={HomeIcon} />
            <p className="brand-name">{props.brand}</p>
            <img className="arrow" src={RightarrowWhite} />
            <p className="bold-text">{props.name}</p>
        </div>
    );
};

export default HeaderTwo;
