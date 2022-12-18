import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['s', 'k','i', 'l', 'l', 's', ' ', '&', ' ','e','x','p','e','r','i','e','n','c','e']}
              idx={15}
            />
          </h1>
          < h2 className='biger' align="LEFT">
           
           Expert in front-end development including technologies like <spam className='color'>HTML5, </spam> 
           <spam className='color'>Boostrap, </spam> 
            <spam className='color' >CSS, </spam> <spam className='color'>Sass, </spam><spam className='color'>Angular, </spam> 
            <spam className='color'>React, </spam><spam className='color'>React Native, </spam><spam className='color'>TypeScript, </spam><spam className='color'> Git</spam>

         </h2>
         <h2>
         Working on databases, back-end logic, application programming interface (APIs), Data Structures and Algorithms, using <spam className='color'>Node.js</spam>  <br/>
        
       
         </h2>
          <h2 >
          
          I have a good sense of aesthetics, and
            experience in responsive, web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
          
          </h2>
       
          <h2>
Visit my <a className='color' href="https://www.linkedin.com/in/dhia-mbarki-331270209/">LinkedIn</a>   profile for more details.Also you can checkout my cv on this +++++++++++     
        
          </h2>
        </div>

        <div className="stage-cube-cont">
        <div className='size'>
      <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
            
            
        </div>
        
    </section>
    </div>
          <div className="cubespinner">
            
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
   
      <Loader type="pacman" />
    </>
  )
}

export default About
