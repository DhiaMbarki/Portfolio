import Loader from "react-loaders";
import  "./index.scss";
import picture from "./picture.png"
import picture2 from "./picture2.png"
import picture3 from "./picture3.jpg"



const Portfolio = () => { 
   
   

 

    const renderPortfolio = (portfolio) => {
        return (
          <div>
         
       </div>
        );
    }


    return (
        <>
        <div>
           <div className="card">
          <div >
             <h1>Apps</h1>
             <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue.
             </p>
             <button className="sh_btn">Read more</button>
          </div>
          <div className="cover">
             <div className="coverFront">
                <div>
                   <h5>Apps</h5>
                   <img src={picture}  />
                </div>
             </div>
             <div className="coverBack"></div>
          </div>
       </div>
    
       <div className="card">
          <div className="test1" >
             <h1>Marketing</h1>
             <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue.
             </p>
             <button className="sh_btn">Read more</button>
          </div>
          <div className="cover">
             <div className="coverFront">
                <div>
                   <h5>Marketing</h5>
                   {/* <img src="img2.svg" alt="" className="sh_img"> */}
                </div>
             </div>
             <div className="coverBack"></div>
          </div>
       </div>
    
       <div className="card">
          <div>
             <h1>Security</h1>
             <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue.
             </p>
             <button className="sh_btn">Read more</button>
          </div>
          <div className="cover">
             <div className="coverFront">
                <div>
                   <h5>Security</h5>
                   {/* <img src="img3.svg" alt="" className="sh_img"> */}
                </div>
             </div>
             <div className="coverBack"></div>
          </div>
       </div>
            <Loader type="pacman" />
            </div>
        </>

    );
}

export default Portfolio;