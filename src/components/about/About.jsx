import "./about.css";
import Award from "../../img/MyPhoto.jpeg";
import React from "react";

const About = () => {
	return (
		<div className="about section-pd" id="about">
			<div className="container">
				<div className="headeing">
					<h3>About Me</h3>
					<h3>About Me</h3>
				</div>
				<div className="info">
					<div className="image">
						<img src={Award} alt="MyPhoto" />
					</div>
					<div className="text-box">
						<p>
							Hello, my name is Mahmoud Saber, I am 20 years old, I'm still
							learning, but I learned how to design websites and also front-end
							development and web developer using Skills HTML & CSS & JavaScript
							& jQuery & Bootstrap & React.js <br />
							<br />
							Manage website development projects from initial design through
							completion, optimizing all cross-browser and multi-platform
							compatibility. Work closely with programmers and clients to meet
							project requirements, goals, and desired functionality.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
