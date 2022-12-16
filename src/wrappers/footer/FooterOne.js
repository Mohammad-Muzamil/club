import { Link } from "react-router-dom";
import MainLogo from "../../assets/img/logo/Logo.png";
import Payment1 from "../../assets/img/paymenticons/Payment1.png";
import Payment2 from "../../assets/img/paymenticons/Payment2.png";
import Payment3 from "../../assets/img/paymenticons/Payment3.png";
import Payment4 from "../../assets/img/paymenticons/Payment4.png";

const FooterOne = (props) => {
  return (
    <footer
      className={`footer-area ${
        props.backgroundColorClass ? props.backgroundColorClass : ""
      } ${props.spaceTopClass ? props.spaceTopClass : ""} ${
        props.spaceBottomClass ? props.spaceBottomClass : ""
      } ${props.extraFooterClass ? props.extraFooterClass : ""} ${
        props.spaceLeftClass ? props.spaceLeftClass : ""
      } ${props.spaceRightClass ? props.spaceRightClass : ""}`}
    >
      <div className="container">
        <div className="row">

          <div className="col-xl-4 col-lg-4 col-sm-4 footer-start">
            <div className="main-logo">
              <img src={MainLogo} />
            </div>

            <p>
              Design amazing digital experiences that create more happy in the
              world.
            </p>

            <p className="email-support">support@hypekicks.com</p>

            <div className="paymentIcons">
              <img src={Payment1} />
              <img src={Payment2} />
              <img src={Payment3} />
              <img src={Payment4} />
            </div>
          </div>

          <div className="row footer-end col-xl-8 col-lg-8 col-sm-8 m-0">
            <p>
              Our shoes are listed as <b className="bold">‘UA’ </b>stand for <b className="bold">Unauthorized Authentic.</b>
              Unauthorized Authentic Means That They Were Made In The Same Place
              And With The Same Materials As The Original Product, But Sold By
              Someone Else.
            </p>

            <div className={"col-xl-3 col-lg-3 col-sm-4 p-0"}>
              <div className="footer-widget mb-30">
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

            <div className={"col-xl-3 col-lg-3 col-sm-4 p-0"}>
              <div className="footer-widget mb-30">
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

            <div className={"col-xl-3 col-lg-3 col-sm-6 p-0"}>
              <div className="footer-widget mb-30">
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

            <div className={"col-xl-3 col-lg-3 col-sm-6 p-0"}>
              <div className="footer-widget mb-30">
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

    
      </div>
      <div 
        className="footer-copyright"
        >
          <p>
          © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default FooterOne;
