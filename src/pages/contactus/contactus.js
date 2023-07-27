import React, { Fragment,useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Send from "../../assets/img/buttons/send.png";
import axios from "axios";
import { Throw_Error, Success } from "../../helpers/NotifiyToasters";

const send_contactus_data=async (apiEndpoint,formData)=>{
  const response = await axios.post(apiEndpoint, formData);
  return response;
}

const ContactUs = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactDetails((prevContactDetails) => ({
      ...prevContactDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const sendContactData = async () => {
    const fields = ["name", "email", "subject", "message"];
    fields.forEach((field) => {
      if (!contactDetails[field].trim()) {
        errors[field] = `Please enter your ${field}`;
      } else {
        errors[field] = "";
        setErrors((error)=>({...errors,field:""}))
      }
    });

    const keyValuePairs = Object.entries(contactDetails);
    const nonEmptyPairs = keyValuePairs.filter(([key, value]) => value === "");
    const numberOfKeys = Object.keys(nonEmptyPairs).length;
    if (numberOfKeys > 0) {
      return;
    }
    else
    {
      // call the api to send data
      const apiEndpoint = "YOUR_API_ENDPOINT";
      const formData = { ...contactDetails };
      const response = await send_contactus_data()
      if (true)
      {
          Success("Soon we will contact you !!!");
      }
      else
      {
          Throw_Error("Message not Send !!!");
      }
    }
  };

  return (
    <Fragment>
         <LayoutOne
           headerContainerClass="container-fluid"
           headerPaddingClass="header-padding-2"
         >
    <div className="BackgroundPicture pt-100 pb-100">
             <div className="container">
               <p className="contact-us">Contact us</p>
               <p className="help-text-heading pt-100">CAN WE HELP?</p>
               <p className="help-text pb-100 pt-30">
                 Office support is available 5/24, we wish you a new and successful
                 experience in our store. Make sure we are here to help you with
                 any problem you encounter in the Store. BooLopo support Team
               </p>
    
          <div className="row m-0 justify-content-between">
            <div className="contact-us-form col-lg-7 col-md-12 col-sm-12">
              <div className="feild-view">
                <p className="label">
                  Your Name
                  <p className="star">*</p>
                </p>
                {errors.name && <span className="error" >{errors.name}</span>}
                <input
                  type="text"
                  name="name"
                  value={contactDetails.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="feild-view">
                <p className="label">
                  Your E-Mail
                  <p className="star">*</p>
                </p>
                {errors.email && <span className="error">{errors.email}</span>}
                <input
                type="email"
                name="email"
                value={contactDetails.email}
                onChange={handleChange}
                required
                />

              </div>
              <div className="feild-view">
                <p className="label">
                  Subject
                  <p className="star">*</p>
                </p>
                {errors.subject && <span className="error">{errors.subject}</span>}
                <input
                type="text"
                name="subject"
                value={contactDetails.subject}
                required
                onChange={handleChange} 
                />
                </div>
                <div className="feild-view">
                  <p className="label">
                    Drop Your Message <p className="star">*</p>
                  </p>
                {errors.message && <span className="error">{errors.message}</span>}
                  <textarea 
                  name="message"
                  value={contactDetails.message}
                  onChange={handleChange}
                  required
                  />
                  </div>

        

              <div className="row m-0 check-box-view align-items-center">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={contactDetails.subscribe}
                  onChange={handleChange}
                />
                <p>Please keep me updated on new collections.</p>
              </div>

              <img src={Send} alt="Send" onClick={sendContactData} />
            </div>
          
            <div className="contact-us-info col-lg-4 col-md-12 col-sm-12">
              <p className="bold-heading">Store Adress</p>

              <p className="light-text mb-1">L-20, Universal Plaza, L Block,</p>

              <p className="light-text mb-1">DHA Phase</p>
              <p className="light-text">4,Lahore.Punjab,Pakistan.</p>

              <p className="bold-heading">Opning hours</p>

              <p className="light-text">Active 5/24</p>

              <p className="bold-heading">Telephone</p>

              <p className="light-text">+92 336 5563138</p>

              <p className="bold-heading">E-mail</p>

              <p className="light-text">asharatiq11@gmail.com8</p>
            </div>
        </div>
      </div>
    </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ContactUs;
