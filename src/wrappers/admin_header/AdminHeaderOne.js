import React, { useEffect, useState } from "react";
import AdminNavMenu from "../../components/admin_header/AdminNavMenu";
import IconGroup from "../../components/header/IconGroup";
import AdminMobileMenu from "../../components/admin_header/AdminMobileMenu";
import Logo from "../../components/header/Logo";
import SocialMediaGroup from "../../components/header/SocialMediaGroup";
const AdminHeaderOne = (props) => {
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

            <div className="col-xl-10 col-lg-10 d-none d-lg-block">
              <AdminNavMenu/>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-7">
              <IconGroup />
            </div>
          </div>
        </div>
        <AdminMobileMenu />
      </div>
    </header>
  );
};

export default AdminHeaderOne;
