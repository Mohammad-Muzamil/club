import  { Fragment, useEffect } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import "react-multi-carousel/lib/styles.css";
import FaqItem from "../../components/faq/faq";




const Faqs = (props) => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
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
              Our dedication to excellence has enabled us to establish a strong presence in Faisalabad, with our training programs being well-received and appreciated by our members. We prioritize the development of our players' skills and character, instilling discipline, teamwork, and a passion for the sport.
            </p>
            <p className="faq-heading-2">Frequently asked questions</p>
            <p className="faq-heading show-mobile pb-130">Frequently asked questions</p>
            <FaqItem
              question="What is karate?"
              answer="Karate is a traditional Japanese martial art that focuses on striking techniques, such as punches, kicks, knee strikes, and elbow strikes. It emphasizes self-defense, discipline, and physical fitness."
            />
            <FaqItem
              question="What are the benefits of practicing karate?"
              answer="Karate offers numerous benefits, including improved physical fitness, increased flexibility, enhanced coordination, discipline, self-confidence, stress relief, and self-defense skills."
            />
            <FaqItem
              question="Is karate suitable for all ages?"
              answer="Yes, karate is suitable for people of all ages, from children to seniors. Many karate schools offer classes tailored to different age groups and skill levels."
            />
            
            <FaqItem
              question="What is the difference between karate and other martial arts?"
              answer="Each martial art has its own unique techniques, traditions, and philosophies. Karate, for example, primarily focuses on striking techniques, whereas other martial arts like judo or jiu-jitsu emphasize grappling and throws."
            />
            <FaqItem
              question="How are karate techniques learned and practiced?"
              answer="Karate techniques are learned through structured training under the guidance of a qualified instructor. Practitioners perform patterns of movements called 'kata' to practice forms and techniques. Sparring (kumite) is also a crucial component of karate training."
            />
            <FaqItem
              question="How are karate practitioners ranked?"
              answer="Karate practitioners are ranked using a belt system to indicate their level of skill and experience. Beginners typically start with a white belt and progress through various colored belts (e.g., yellow, orange, green, blue, brown) until they reach the black belt level. The black belt itself has multiple degrees (dan levels) representing advanced proficiency."
            />
            <FaqItem
              question="Is karate a sport or an art?"
              answer="Karate can be considered both a sport and an art. As a sport, it involves competitive sparring and tournaments. As an art, it encompasses self-discipline, self-improvement, and philosophical aspects beyond physical techniques."
            />
            <FaqItem
              question="Is karate dangerous?"
              answer="Like any physical activity, karate carries some inherent risks. However, with proper training and supervision, the risks can be minimized. Safety is a top priority in reputable karate dojos"
            />
            <FaqItem
              question="What are the karate class timings for boys?"
              answer="The karate class timings for boys are from 7:00 PM to 9:00 PM."
            />
            <FaqItem
              question="What are the karate class timings for girls?"
              answer="The karate class timings for girls are from 5:00 PM to 7:00 PM."
            />
            <FaqItem
              question="What is the membership fee for the karate club and what does the membership fee include?"
              answer="The membership fee for the karate club is RS.5000/- . The membership fee includes a karate kit that will be provided to the player. The kit typically consists of a karate uniform (gi) and a belt and One month fee."
            />
           
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Faqs;