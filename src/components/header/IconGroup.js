import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions/userinforActions";
import userImg from "../../assets/img/icon-img/user.png";
import heart from "../../assets/img/icon-img/heart.png";
import shoppingBag from "../../assets/img/icon-img/shoppingbag.png";


const IconGroup = (props) => {
  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };
  const history = useHistory();

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  const [login, setlogin] = useState(false);
  const getData = async () => {
    let  localData = await localStorage.getItem("redux_localstorage_simple");
    localData = JSON.parse(localData)
    if (localData.userData.userDetail) {
      setlogin(true);
    } else {
      setlogin(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const LogOutApi = async()=>{

    props.callUserApi({user:null,access_token:null});
    console.log(window.location.pathname);
    if (window.location.pathname=== "/my-account"){
      history.push("/");
    }else{
      window.location.reload(false);
    }

  
  
  }

  return (
    <div className={`header-right-wrap`}>
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>

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
          <img
            className="navBarLogo dropdown-toggle"
            src={userImg}
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          />

          <div class="dropdown-menu">
            {login ? (
              <>
                <Link to={{ pathname: process.env.PUBLIC_URL + "/my-account" }}>
                  <li>Profile</li>
                </Link>
                <Link
                to={{ pathname: process.env.PUBLIC_URL}}
                onClick={LogOutApi}
                >
                  <li>LogOut</li>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={{
                    pathname: process.env.PUBLIC_URL + "/login",
                    state: "login",
                  }}
                >
                  <li className="li1">Login</li>
                </Link>
                <Link
                  to={{
                    pathname: process.env.PUBLIC_URL + "/register",
                    state: "register",
                  }}
                >
                  <li>Sign Up</li>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="same-style header-compare">
        <div class="dropdown">
          <Link to={process.env.PUBLIC_URL + "/cart"}>
            <img
              className="navBarLogo dropdown-toggle"
              src={shoppingBag}
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            />
          </Link>
        </div>
      </div>

      <div className="same-style header-compare">
      <div class="dropdown">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <img className="navBarLogo" src={heart} />
        </Link>
        </div>
      </div>

      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  wishlistData: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callUserApi: (item, addToast) => {
      dispatch(setUser(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
