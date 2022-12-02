import Loader from "react-loaders";
import "./index.css";
import Slider from "react-draggable-slider";
import project1 from "./imgs/pic1.png";
import project2 from "./imgs/pic2.jpg";
import project3 from "./imgs/pic3.png";
import project4 from "./imgs/pic4.jpg";

import MyImage from './imgs/touch-screen-gif-58.webp';



const Portfolio = () => { 
 
    const projectList = [
        {
        //   title: "Nature Is Life",
          image: project1,

        //   description:
        //     "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. "
        },
        {
          // title: "Into The Waters",
          image: project3,
          // description:
            // "Duis at tellus vitae velit aliquet varius. Fusce luctus libero et ligula tristique lobortis. Vestibulum eu placerat risus, eu semper augue. Integer at purus sit amet elit pretium viverra. Suspendisse id fringilla nibh, nec dictum urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        },
        {
          // title: "Miniature Wonderers",
          image: project4,
          // description:
            // "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. "
        },
        {
          // title: "Higher Than The Stars",
        //   image: project5,
          // description:
            // "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. Proin rhoncus magna lectus, nec consequat augue ultricies eu."
        },
      
      ];
    
      const sliderSettings = {
        data: projectList,
        speed: 3000,
        easing: "back",
        bgColor: "#",
        showButton: true,
        buttonTarget: "_self",
        showButton: false

      };

 

    


    return (
        <>
        
<div className="move">
<img style={{ width: 80, height: 60, }} src={MyImage} alt="React Logo" />

        </div>
         
         <div className="all">
    
      <Slider sliderSettings={sliderSettings} />
      

    </div>

    

    
            <Loader type="pacman" />
           
        </>
    );
}

export default Portfolio;