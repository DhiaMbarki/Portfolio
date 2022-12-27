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
					<li data-target="#myCarousel" data-slide-to="3"></li>

				</ol>   
				<div className="carousel-inner">
					<div className="item active">
						<div className="img-box">
                            <img src="https://techneos.xyz/assets/img/web_development.gif" alt=""/></div>
						<p className="testimonial">
						•  Learned organization's overall strategies, business operates and what drives success in the busniss.<br/>

						• Implemented rich user experiences by creating 30- new features utilizing HTML/JS/CSS .<br/>
						• Setup initial project structure and dependencies with technical analysis and time estimates.<br/>
						• Learn to work in a team environment and organizing meetings, discussions and developing the product (ux, design, front-end and back-end tasks).<br/>
						• Evaluated and improved existing data systems under mentor supervision.
						</p>
						<p className="overview"><b>mar 2019 - dec 2019</b>,Tunis,Ariana</p>
					</div>
					<div className="item">
						<div className="img-box"><img src="https://camo.githubusercontent.com/bebb8c335f407e6f31ed9da75ebecc86cebc8941efae0ec924b6903b3fbb94c5/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313537393332322f73637265656e73686f74732f363538373237332f626c75655f626f795f747970696e675f6e6f74686f756768742e676966" alt=""/></div>
						<p className="testimonial">• developed 20+ front-end and back-end applications utilizing React.js, Node.js and type script.<br/>
						• developed 10+ new application features and distributed services that support hight-scale applications.<br/>
						• Assisted in developing and implementing systems architecture designs, patterns, and approaches. <br/>
						• developed web applications and components using Angular.js, including software testing practices.<br/>
						• Collaborated with 2 different development teams on 4 new project designs and feature improvements. <br/>
						• Diagnosed and fixed report functionality issues by troubleshooting.
						
						</p>
						<p className="overview"><b>jan 2020 - dec 2020</b>, Tunis,Ariana</p>
					</div>
					<div className="item">
						<div className="img-box"><img src="https://www.wemanageit.com.ph/wp-content/uploads/2020/04/website-developer.gif" alt=""/></div>
						<p className="testimonial">
						• Developed professional web and mobile platforms using advanced algorithms based on client needs successfully in a team environment, and also independently.<br/>
						• comminicated with line of business and managed the overall status and health of 20+ applications.<br/>
						• Attend 100+ weekly standup meeting to receive weekly tasks and mentorship from a group of senior developers.<br/>
						•Developed and maintained 20+ front-ends web application focused on user experience.

						
						</p>
						<p className="overview"><b>fev 2021 - oct 2021 </b>, Self-employed</p>
					</div>

					<div className="item">
						<div className="img-box"><img src="https://cdn.dribbble.com/users/1876781/screenshots/6169542/web_character.gif" alt=""/></div>
						<p className="testimonial">
						• Developed 15 web apps for multiple clients, providing a wide range of functionality and tools enabling mission-critical prosses.<br/>
						• Led 10 Successful (on schedule and budget) agile development projects for clients. <br/>
						• Resolved over 250 critical software bugs to resolve issues and improve performance 34 test driven deployments (TDD) using Rspec and jasmine spec runner for unit and functional testing.<br/>
						•Attend 100+ weekly standup meeting to receive weekly tasks and mentorship from a group of senior developers.<br/>
						•Collaborated with 2 engineering teams on domain, design, and code testing 12+ projects.


						
						</p>
						<p className="overview"><b>jan 2022 - nov 2022 </b>, Self-employed</p>
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