import Loader from "react-loaders";
import "./index.scss";
import Card from "../Card";

import { properties } from "../constants/data";

const Portfolio = () => { 
   
   

 

  


    return (
        <div className="">
        <div className="properties">
          {properties.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
        <Loader type="pacman" />

      </div>
      
    );
}

export default Portfolio;