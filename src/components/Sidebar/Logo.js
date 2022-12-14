import React from 'react'
import './Logo.scss'
import slides from "./homeSlide";
import classNames from "classnames";
import { Link } from 'react-router-dom'




class Logo extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = {
      activeSlide: -1,
      prevSlide: -1,
      sliderReady: false,
      slides: slides,
    };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.state.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <section id="projects">


      <div className={classNames("slider", { "s--ready": sliderReady })}>
        <div className="slider__slides">
          {this.state.slides.map((slide, index) => (
            <div
              className={classNames("slider__slide", {
                "s--active": activeSlide === index,
                "s--prev": prevSlide === index,
              })}
              key={slide.city}
            >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">
                  {slide.country || slide.city}
                </h3>
                {/* <h2 className="slider__slide-heading">
                  {slide.city.split("").map((l, i) => (
                    <span key={i}>{l}</span>
                  ))}
                </h2> */}
                {/* <p className="slider__slide-readmore">read more</p> */}
                {/* <Link to="/Home" className="button">
            <nav>
  <ul>
    <li>
      Check out
      <span></span><span></span><span></span><span></span>
    </li>
   
  
  </ul>
</nav>
          </Link> */}
          <div className='up'>
           <Link to="/Home">
<button class="button-52" role="button">Welcome</button>
          </Link>
          </div>

              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div
                      className="slider__slide-part-inner"
                      style={{ backgroundImage: `url(${slide.img})` }}
                    />
                    <img src={slide.img} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="slider__control"
          onClick={() => this.changeSlides(-1)}
        />
        <div
          className="slider__control slider__control--right"
          onClick={() => this.changeSlides(1)}
        />

       
      </div>
      
</section>


                  
    );
    
  }
}

export default Logo