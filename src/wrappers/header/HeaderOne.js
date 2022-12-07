import React, { useEffect, useState } from "react";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import Logo from "../../components/header/Logo";
const HeaderOne = (props) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header className={`header-area clearfix  ${"headerPositionClass"}`}>
      <div className={`${"headerPaddingClass"} header-top-area`}></div>

      <div
        className={` ${"headerPaddingClass"} sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className={"container"}>
          <div className="row">
            <div className="d-flex col-xl-3 col-lg-4 col-md-6 col-5">
              <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
            </div>
            <div className="col-xl-7 col-lg-6 d-none d-lg-block">
              <NavMenu  />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-7">
              <IconGroup />
            </div>
          </div>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};

export default HeaderOne;
