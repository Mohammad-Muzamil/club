
import { Link } from "react-router-dom";


const FooterOne = (props) => {




  return (
    <footer
      className={`footer-area ${props.backgroundColorClass ? props.backgroundColorClass : ""
        } ${props.spaceTopClass ? props.spaceTopClass : ""} ${props.spaceBottomClass ? props.spaceBottomClass : ""
        } ${props.extraFooterClass ? props.extraFooterClass : ""} ${props.spaceLeftClass ? props.spaceLeftClass : ""
        } ${props.spaceRightClass ? props.spaceRightClass : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-4">

          </div>

          <div className={"col-lg-2 col-sm-4"}>
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>Shop</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>
                      Walled Prints
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Store location
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>Bags</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Pillows</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Mugs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={"col-lg-3 col-sm-4"}>
            <div
              className={`${props.sideMenu
                  ? "footer-widget mb-30 ml-95"
                  : "footer-widget mb-30 ml-50"
                }`}
            >
              <div className="footer-title">
                <h3>Create</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Design Your Own Products
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={"col-lg-2 col-sm-6"}>
            <div
              className={`${props.sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
                }`}
            >
              <div className="footer-title">
                <h3>Follows Us</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={"col-lg-3 col-sm-6"}>
            <div
              className={`${props.sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
                }`}
            >
              <div className="footer-title">
                <h3>Contact</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button> */}
    </footer>
  );
};


export default FooterOne;
