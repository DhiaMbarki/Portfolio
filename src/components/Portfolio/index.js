import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";
import Slider from "react-draggable-slider";
import { projectList } from "./data";


const Portfolio = () => { 
 
    const sliderSettings = {
        data: projectList,
        speed: 1000,
        easing: "expo",
        bgColor: "#fff",
        buttonHref: "https://www.google.com",
        buttonTarget: "_self",
        buttonText: "View project",
        showButton: false
      };
   

 

    const renderPortfolio = (portfolio) => {
        return (
           <div></div>
        );
    }


    return (
        <>
        <div className="App">
    
      <Slider sliderSettings={sliderSettings} />
    </div>
            
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;