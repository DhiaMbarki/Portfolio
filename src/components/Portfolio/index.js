import Loader from "react-loaders";
import "./index.scss";





const Portfolio = () => { 
 
    


    return (
        <>
        
        <div class="demo-wrapper">
      <h1 class="demo-title">Pure CSS Slider</h1>
      <section class="slider-wrapper">
        <input
          type="radio"
          name="slides"
          checked="checked"
          id="slide_1"
          hidden
        />
        <input type="radio" name="slides" id="slide_2" hidden />
        <input type="radio" name="slides" id="slide_3" hidden />
        <input type="radio" name="slides" id="slide_4" hidden />
        <input type="radio" name="slides" id="slide_5" hidden />

        <ul class="slider-slides">
          <li class="slider-slide">
            <section class="slider-content">
              <h2 class="slider-title">Slide</h2>
              <p class="demo-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam expedita mollitia esse voluptatibus modi hic ex
                officiis veniam dolor minima accusantium accusamus laudantium
                iste, tempore fugit libero maxime iusto neque.
              </p>

              <a class="demo-btn" href="#!">Learn more</a>
            </section>

            <div class="slider-img-wrapper">
              <img
                class="slider-image"
                src="https://picsum.photos/id/16/1920/400"
                alt=""
              />
            </div>
          </li>

          <li class="slider-slide">
            <section class="slider-content">
              <h2 class="slider-title">Slide</h2>
              <p class="demo-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam expedita mollitia esse voluptatibus modi hic ex
                officiis veniam dolor minima accusantium accusamus laudantium
                iste, tempore fugit libero maxime iusto neque.
              </p>

              <a class="demo-btn" href="#!">Learn more</a>
            </section>

            <div class="slider-img-wrapper">
              <img
                class="slider-image"
                src="https://picsum.photos/id/24/1920/400"
                alt=""
              />
            </div>
          </li>

          <li class="slider-slide">
            <section class="slider-content">
              <h2 class="slider-title">Slide</h2>
              <p class="demo-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam expedita mollitia esse voluptatibus modi hic ex
                officiis veniam dolor minima accusantium accusamus laudantium
                iste, tempore fugit libero maxime iusto neque.
              </p>

              <a class="demo-btn" href="#!">Learn more</a>
            </section>

            <div class="slider-img-wrapper">
              <img
                class="slider-image"
                src="https://picsum.photos/id/26/1920/400"
                alt=""
              />
            </div>
          </li>

          <li class="slider-slide">
            <section class="slider-content">
              <h2 class="slider-title">Slide</h2>
              <p class="demo-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam expedita mollitia esse voluptatibus modi hic ex
                officiis veniam dolor minima accusantium accusamus laudantium
                iste, tempore fugit libero maxime iusto neque.
              </p>

              <a class="demo-btn" href="#!">Learn more</a>
            </section>

            <div class="slider-img-wrapper">
              <img
                class="slider-image"
                src="https://picsum.photos/id/28/1920/400"
                alt=""
              />
            </div>
          </li>

          <li class="slider-slide">
            <section class="slider-content">
              <h2 class="slider-title">Slide</h2>
              <p class="demo-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam expedita mollitia esse voluptatibus modi hic ex
                officiis veniam dolor minima accusantium accusamus laudantium
                iste, tempore fugit libero maxime iusto neque.
              </p>

              <a class="demo-btn" href="#!">Learn more</a>
            </section>

            <div class="slider-img-wrapper">
              <img
                class="slider-image"
                src="https://picsum.photos/id/34/1920/400"
                alt=""
              />
            </div>
          </li>

          <li class="slider-slide">
            <section class="slider-content">
              <h2 class="slider-title">Slide #6</h2>
              <p class="demo-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam expedita mollitia esse voluptatibus modi hic ex
                officiis veniam dolor minima accusantium accusamus laudantium
                iste, tempore fugit libero maxime iusto neque.
              </p>

              <a class="demo-btn" href="#!">Learn more</a>
            </section>

            <div class="slider-img-wrapper">
              <img
                class="slider-image"
                src="https://picsum.photos/id/32/1920/400"
                alt=""
              />
            </div>
          </li>
        </ul>

        <div class="slider-arrows">
          <label class="slider-arrow" for="slide_1"></label>
          <label class="slider-arrow" for="slide_2"></label>
          <label class="slider-arrow" for="slide_3"></label>
          <label class="slider-arrow" for="slide_4"></label>
          <label class="slider-arrow" for="slide_5"></label>
          <label class="slider-arrow -go-to-first" for="slide_1"></label>
          <label class="slider-arrow -go-to-last" for="slide_5"></label>
        </div>

        <div class="slider-nav">
          <label class="slider-nav-item" for="slide_1"></label>
          <label class="slider-nav-item" for="slide_2"></label>
          <label class="slider-nav-item" for="slide_3"></label>
          <label class="slider-nav-item" for="slide_4"></label>
          <label class="slider-nav-item" for="slide_5"></label>
        </div>
      </section>
    </div>

    

    
            <Loader type="pacman" />
           
        </>
    );
}

export default Portfolio;