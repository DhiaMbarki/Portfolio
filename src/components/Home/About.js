import React, { useEffect, useRef } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";

import img2 from "./Logo/img1.jpg";
// import arrow from "../../../images/arrow-right.svg";
import "./about.scss";



const About = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    const boyImage = images.lastElementChild;

   

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "" } });

    //Images Animation
    tl.from(girlImage,  {  }, "")
      .from(
        girlImage.firstElementChild,
        
        {  },
        
      )
      .from(boyImage, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
      

  
  }, [tl]);

  return (
    <div className="hero" ref={(el) => (app = el)}>
      <div className="container">
        <div className="hero-inner">
         
          <div className="hero-images">
            <div ref={(el) => (images = el)} className="hero-images-inner">
              <div className="hero-image girl">
              </div>
              <div className="hero-image boy">
                <img src={img2} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
