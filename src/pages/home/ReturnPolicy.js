import React, { Fragment} from "react";
import LayoutOne from "../../layouts/LayoutOne";
import "react-multi-carousel/lib/styles.css";
import send from "../../assets/img/buttons/send.png";

const ReturnPolicy = (props) => {
  
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >

        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
           
                <p className="heading-text pb-30">Return Policy</p>
         
         

        
       
                <p className="paragraph-text">
                Welcome to our self-service Exchange open 24/5. Register your exchange and process your return by following the steps below. Make sure you send all your order information                
                </p>
          

              <div className="line pt-50 mb-50"></div>
         

        <form action="/action_page.php" >
            <div className="input-flex">
                <div className="form-group">
                    <label for="name" className="paragraph-text required">Your Name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className="pl-70"></div>
                <div className="form-group">
                    <label for="email" className="paragraph-text required">Your E-Mail</label>
                    <input type="text" id="email" name="email" required/>
                </div>
            </div>
            <label for="subject" className="paragraph-text required">Subject</label>
            <input type="text" id="subject" name="subject" required/><br></br>
            <label for="issue" className="paragraph-text required">Drop Your Issue</label>
            <textarea id="issue" name="issue" required/><br></br>
            <img className="send-btn" src={send} />
        </form>
        </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ReturnPolicy;
