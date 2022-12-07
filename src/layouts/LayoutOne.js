
import React, { Fragment } from "react";
import HeaderOne from "../wrappers/header/HeaderOne";
import FooterOne from "../wrappers/footer/FooterOne";


const LayoutOne = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass,
  categories,
}) => {
  return (

    <Fragment>
      <div className="d-flex flex-column justify-content-between max-height">
        <HeaderOne
          layout={headerContainerClass}
          top={headerTop}
          headerPaddingClass={headerPaddingClass}
          headerPositionClass={headerPositionClass}
          categories={categories}
        />
        {children}
        <FooterOne
          backgroundColorClass="bg-black"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
        />
      </div>
    </Fragment>
  );
};




export default LayoutOne;