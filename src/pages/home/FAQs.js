import  { Fragment } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import "react-multi-carousel/lib/styles.css";
import FaqItem from "../../components/faq/faq";




const Faqs = (props) => {
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            <p className="faq-heading show-screen pb-130">Frequently asked questions</p>
            <p className="faq-short">FAQS</p>
            <p className="faq-help-text">can we help</p>
            <p className="faq-paragraph-text">
              We are proud to offer international shipping services that
              currently operate in over 200 countries and islands worldwide.
              Nothing means more to us than bringing our customers great value
              and service. We will continue to grow to meet the needs of all
              our customers, delivering a service beyond all expectation
              anywhere in the world.{" "}
            </p>
            <p className="faq-heading-2">Frequently asked questions</p>
            <p className="faq-heading show-mobile pb-130">Frequently asked questions</p>
            <FaqItem
              question="HOW LONG DOES SHIPPING TAKE? (DELAYS MAY OCCUR DUE TO COVID-19)"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            <FaqItem
              question="WHAT DOES UA MEAN IN SNEAKERS?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            <FaqItem
              question=" WHAT DOES UA OR UNAUTHORISED AUTHENTIC MEAN?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            
            <FaqItem
              question="DO I HAVE TO PAY CUSTOMS FOR INTERNATIONAL ORDERS?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            <FaqItem
              question="WHAT COULD CAUSE A DELAY IN MY ORDER?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            <FaqItem
              question="WHAT IS THE BOOLOPO CONFIRMATION NUMBER?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            <FaqItem
              question="WILL I BE ABLE TO TRACK MY ORDER?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            <FaqItem
              question="WHAT METHODS OF PAYMENT ARE ACCEPTED?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            <FaqItem
              question="IS MY PERSONAL INFORMATION SAFE?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            <FaqItem
              question="Do You Ship worldwide?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
           
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Faqs;