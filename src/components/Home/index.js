import { useEffect, useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logoS.png'
import {gsap, Power3} from 'gsap';

// import Logo from './Logo'
import Images from './Images'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['o', 'f', 't', 'w', 'a', 'r', 'e']
  const jobArray = [
   
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;



  

  return (


    <>

<Images timeline = {tl} ease = {ease}/>

      <div className="container home-page">

        <div className="text-zone">

          <h1>
            <div className="space">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            &nbsp;
            <span className={`${letterClass} _13`}> m </span>
            <span className={`${letterClass} _14`}> y </span>
            &nbsp;
            <span className={`${letterClass} _15`}> n </span>
            <span className={`${letterClass} _16`}> a </span>
            <span className={`${letterClass} _17`}> m</span>
            <span className={`${letterClass} _18`}> e </span>
            &nbsp;
            <span className={`${letterClass} _18`}> i </span>
            <span className={`${letterClass} _18`}> s </span>
            </div>
            <span className={`${letterClass} _18`}> 𝘿𝙝𝙞𝙖 𝙈𝙗𝙖𝙧𝙠𝙞 </span>


            
          
            <br />

            <span className={`${letterClass} _19`}>I</span>
            <span className={`${letterClass} _20`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / JavaScript Expert / Web Design</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>

        </div>
        {/* <Logo /> */}
      
      </div>
      
      

      <Loader type="pacman" />
    </>
  )
}

export default Home
