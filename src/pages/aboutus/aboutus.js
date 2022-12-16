import React, { Fragment, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import CeoSection from "../../assets/img/Background/ceosection.png";
import Image1 from "../../assets/img/aboutus/image1.png";

const AboutUs = (props) => {
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            <p className="about-us">About us</p>

            <img src={CeoSection} className="ceo-section pt-100" />

            <p className="world-wide">EST. 2018</p>
            <p className="world-wide">WORLDWIDE DELIVERY</p>

            <div className="container white-background">
              <div className="row  m-0 justify-content-between">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="portion1">
                    <p className="bold">How it all started</p>
                    <p className="light">
                      Our site launched in July 2018, we aim to be the foremost
                      trusted seller within the market. We have already sent
                      thousands of pairs of top-quality UA replica sneakers to
                      our customers. We have built a gentle and trusty
                      relationship with every customer, as our customers are the
                      highest priority of our business. We greatly value the
                      requirements and suggestions of our customers. Via email,
                      WhatsApp, and Instagram, you’ll receive prompt and
                      courteous services from our consultants, who are going to
                      be at your service until you discover the right products
                      you wish. Meanwhile, we offer automatic order tracking
                      after service because serving our customers is the
                      greatest concern of our business.We assure our customers
                      of reliable quotations, prompt deliveries, and stable
                      supplies. We are constantly working to enhance our
                      products, services.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="video-img">
                    <img src={Image1} />
                  </div>
                </div>
              </div>

              <div className="row  m-0 justify-content-between pt-30">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="video-img2">
                    <img src={Image1} />
                    <button>
                      <p>Follow us on instagram</p>
                    </button>

                    <p>
                      Remember to show off your new purchase on insta bytagging
                      us and get $20 off your next order.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="portion2">
                    <p className="bold">
                      An excessive amount (If not TONS) of leftovers would
                      either be dumped or burned away.
                    </p>
                    <p className="light">
                      All our products are of high quality and made of authentic
                      materials, the pictures on our sites are real photos of
                      samples in our warehouses, that were taken by ourselves.
                      Due to the conditions of sunshine and background, they
                      could look a touch different from what they really
                      neutralize in the important world. The item you will
                      receive will be identical to the item shown in the
                      picture. Each item is inspected before shipment to make
                      sure the very best quality standards. Quality and good
                      service are our primary priority. You need to understand
                      that, the factory here keeps improving the sneakers’
                      details, we add updated version date whenever on the item
                      page. Please carefully check the pics and videos updated
                      date on the item page, know well which version you’ve got
                      ordered. We hope to offer you 100% satisfaction while you
                      patronize our store. We believe in liability, and that we
                      run our business supported a good reputation and mutual
                      benefits. All goods on our website are provided of top
                      quality. We assure our customers of reliable quotations,
                      prompt deliveries, and stable supplies. We are constantly
                      working to enhance our products, services, and website to
                      form your shopping experience better and better. We wish
                      you a pleasant shopping!We assure our customers of
                      reliable quotations, prompt deliveries, and stable
                      supplies. We are constantly working to enhance our
                      products, services, and website to form your shopping
                      experience better and better. We wish you a pleasant
                      shopping!We assure our customers of reliable quotations,
                      prompt deliveries, and stable supplies. We are constantly
                      working to enhance our products, services, and website to
                      form your shopping experience .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default AboutUs;
