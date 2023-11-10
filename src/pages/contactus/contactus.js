import React, { Fragment,useEffect,useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Send from "../../assets/img/buttons/send.png";
import axios from "axios";
import { Throw_Error, Success } from "../../helpers/NotifiyToasters";
import { useMediaQuery } from "react-responsive";
import { CONATCT_US_DATA } from "../../helpers/api";
import { HashLoader,RingLoader } from 'react-spinners';



const WebLoader=(prop)=>{
  const isMobilemodeActive = useMediaQuery({ maxWidth:767 });
  return(
    <div className="col-12 d-flex justify-content-center align-items-center flex-column">
      
      <RingLoader color="#FFFFFF"  className={`${isMobilemodeActive?"ml-2":"ml-0"}`} size={ isMobilemodeActive?50:100}/>
      <h4 className={`text-white mt-4 ${isMobilemodeActive?"ml-3":"ml-2"}`}>{prop.text}....</h4>

    </div>
  );
}
const ContactUs = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const isMobiledevice = useMediaQuery({ maxWidth:767 });
  const [isLoading,setIsLoading]=useState(false);
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
      const formData = { ...contactDetails };
      
      setIsLoading(true);
      await CONATCT_US_DATA(formData).then((response)=>{
        if (response.status==200){
          Success("Soon we will contact you !!!");
          setContactDetails({
            name: "",
            email: "",
            subject: "",
            message: "",
            subscribe: false,
          });
          setIsLoading(false);

        }else{
          Throw_Error("Message not Send !!!");
          setIsLoading(false);

        }

      });
     
    }
  };

  return (
    <Fragment>
         <LayoutOne
           headerContainerClass="container-fluid"
           headerPaddingClass="header-padding-2"
         >
            <div className="BackgroundPicture pt-40 pb-100">
             {isLoading&&<WebLoader text="Sending "/>}
             {!isLoading&&<div className="container">
               <p className="contact-us">Contact us</p>
               <p className="help-text-heading pt-60">CAN WE HELP?</p>
               <p className="help-text pb-100 pt-30">
               Yes, we are here to help! Our office support is available 24/7, and we want to ensure that you have a fantastic and successful experience in our Academy.
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


              <img src={Send} alt="Send" onClick={sendContactData} style={{marginTop: isMobiledevice?"-5px":""}} />
            </div>
          
            <div className="contact-us-info col-lg-4 col-md-12 col-sm-12">
              <p className="bold-heading">Office Adress</p>

              <p className="light-text mb-1">Samnabad Sports Complex</p>

              <p className="light-text mb-1">Faisalabad</p>
              <p className="light-text">Pakistan</p>

              <p className="bold-heading">Opning hours</p>

              <p className="light-text">Girls 5 to 7 PM</p>
              <p className="light-text" style={{marginTop:isMobiledevice? "-30px": '-100px'}}>Boys 7 to 9 PM</p>

              <p className="bold-heading">Telephone</p>

              <p className="light-text">+92 300 7675885</p>

              <p className="bold-heading">E-mail</p>

              <p className="light-text" style={{marginLeft: isMobiledevice ?"":"-40px"}}>youthkarateacademies@gmail.com</p>
            </div>
        </div>
      </div>}
    </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ContactUs;
