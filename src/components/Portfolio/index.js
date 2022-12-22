import Loader from "react-loaders";
import "./index.css";

import img from './imgs/javascript.png'



const Portfolio = () => { 
 
    


    return (
        <>
   

        <div class="containerr">
	<div className="row">
		<div className="col-md-8 col-center">
			<div id="myCarousel" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>   
				<div className="carousel-inner">
					<div className="item active">
						<div className="img-box">
                            <img src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" alt=""/></div>
						<p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
						<p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
					</div>
					<div className="item">
						<div className="img-box"><img src="/examples/images/clients/2.jpg" alt=""/></div>
						<p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
						<p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
					</div>
					<div className="item">
						<div className="img-box"><img src="/examples/images/clients/3.jpg" alt=""/></div>
						<p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
						<p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
					</div>
				</div>
				<a className="carousel-control left" href="#myCarousel" data-slide="prev">
					<i className="fa fa-angle-left"></i>
				</a>
				<a className="carousel-control right" href="#myCarousel" data-slide="next">
					<i className="fa fa-angle-right"></i>
				</a>
			</div>
		
		</div>
	</div>
	
</div>
<div className="all">
<img className="icon0" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
<img className="icon1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
<img className="icon2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
<img className="icon3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />

<img className="icon4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
<img className="icon5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
<img className="icon6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
<img className="icon7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
<img className="icon8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
<img className="icon9" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
<img className="icon10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
<img className="icon11" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
</div>
    
            <Loader type="pacman" />
           
        </>
    );
}

export default Portfolio;