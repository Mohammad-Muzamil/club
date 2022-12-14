import React, { Fragment, useRef, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import "react-multi-carousel/lib/styles.css";
import send from "../../assets/img/buttons/send.png";

const Payments = (props) => {
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >

        <div className="Slider-Area pt-100 pb-100 pr-30">
          <div className="container pl-50">
            <div className="row justify-content-between">
                <p className="heading-text">Payments</p>
            </div>
          </div>

          <div className="container pl-50 pt-100">
            <div className="row justify-content-between">
                <p className="subheading-text">Secure Payments</p>
                <p className="paragraph-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu facilisis nunc, egestas suscipit turpis. Mauris accumsan non enim eget laoreet. Phasellus quam nisi, rhoncus vel fermentum non, euismod eu libero. Etiam dapibus ligula velit, quis commodo neque condimentum vel. Vestibulum ut vestibulum massa. Nam et nulla eu erat egestas aliquet eu rhoncus arcu. Praesent faucibus lacus sed facilisis vehicula. Curabitur pellentesque mi mi, sed auctor neque laoreet ut.
                </p>
            </div>
          </div>

          <div className="container pl-50 pt-45">
            <div className="row justify-content-between">
                <p className="subheading-text">Payment Methods<br></br></p>
            </div>
          </div>
          <div className="container pl-50">
            <div className="row justify-content-between">
                <p className="points-text">
                Credit Card
                </p>
                <p className="subparagraph-text">
                    You can pay by credit or debit card from the VISA, Mastercard and AMEX circuits.We are not always able to accept credit card payments.You can check if this payment method is available at checkout.
                </p>
                <p className="points-text">
                Bitcoin(21% Discount)
                </p>
                <p className="subparagraph-text">
                You can pay in Bitcoin or other cryptocurrencies by choosing the “Bitcoin” option during checkout.If you have a Coinbase account you can make the payment directly on our site.If you have difficulty you can still send the payment to our wallet yourself.If you don’t know how to send Bitcoins you can read our guide here.
                </p>
                <p className="points-text">
                Bank Transfer
                </p>
                <p className="subparagraph-text">
                You can pay by bank transfer in USD, EUR, GBP. You will receive details of the bank account to which to send the transfer depending on the currency you choose.
                </p>
                <p className="points-text">
                Paypal
                </p>
                <p className="subparagraph-text">
                Currently we can accept payments via Paypal only with the formula “for friends and family” or “donations”.You can check which method is available at checkout.If you want to pay with Paypal you can place the order by selecting the “Paypal” option during check-out.Then you will receive the link through which you can complete the payment.                </p>
            </div>
          </div>

          <div className="container pl-50">
            <div className="row justify-content-between">
          <div className="line pt-100"></div>
          </div>
          </div>

        <div className="container pt-80 pb-40 pl-50">
            <div className="row justify-content-between">
                <p className="services-heading-text">Use Support Service For Issue</p>
            </div>
        </div>

        <form action="/action_page.php" className="container pl-50 pt-10">
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
            {/* <input type="submit" value="Submit"/> */}
            <img
            
            className="send-btn"
            src={send}
            />
        </form>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Payments;
