import React, { useEffect, useState } from "react";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import Logo from "../../components/header/Logo";
import SocialMediaGroup from "../../components/header/SocialMediaGroup";
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
      {/* <div className={`${"headerPaddingClass"} header-top-area`}></div> */}

      <div className={` ${"headerPaddingClass"} sticky-bar header-res-padding clearfix ${scroll > headerTop ? "stick" : "" }`} >
        <div className={"container webView"}>
          <div className="row">
            <div className="d-flex col-xl-6 col-lg-6 col-md-6 col-6">
              <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-6 ">
              <SocialMediaGroup />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-9 d-none d-lg-block">
              <NavMenu />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-7">
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
