import React from "react";
import { Link } from "react-router-dom";



const IconGroup = (props) => {
  

  return (
    <div className={`header-right-wrap`}>
      <div className="same-style header-search d-none d-lg-block">


        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>

      {/* If youw want to show hide or show on mobile view add or remove  "d-none d-lg-block" in same-style header-compare  */}

      <div className="same-style header-compare ">
        <div class="dropdown">
          {/* <img
            className="navBarLogo dropdown-toggle"
            src={userImg}
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          /> */}

          <div class="dropdown-menu">
    
              <>
                <Link to={{ pathname: process.env.PUBLIC_URL + "/my-account" }}>
                  <li>Profile</li>
                </Link>
                <Link
                to={{ pathname: process.env.PUBLIC_URL}}
                // onClick={LogOutApi}
                >
                  <li>LogOut</li>
                </Link>
              </>
            
          </div>
        </div>
      </div>

      <div className="same-style header-compare">
        <div class="dropdown">
          {/* <Link to={process.env.PUBLIC_URL + "/cart"}>
            <img
              className="navBarLogo dropdown-toggle"
              src={shoppingBag}
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            />
          </Link> */}
        </div>
      </div>

      <div className="same-style header-compare">
      <div class="dropdown">
        {/* <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <img className="navBarLogo" src={heart} />
        </Link> */}
        </div>
      </div>

    </div>
  );
};




export default IconGroup;
