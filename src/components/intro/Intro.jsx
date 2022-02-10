import "./intro.css";
import React from "react";

const Intro = () => {
	return (
		<>
			<div className="nav">
				<div className="container navbar">
					<div className="logo">
						<h1>Mahmoud</h1>
					</div>
					<ul className="links">
						<li>
							<a href="#home">
								<i className="fas fa-home"></i> Home
							</a>
						</li>
						<li>
							<a href="#about">
								<i className="fas fa-address-card"></i> About
							</a>
						</li>
						<li>
							<a href="#projects">
								<i className="fas fa-project-diagram"></i> Projects
							</a>
						</li>
						<li>
							<a href="#contact">
								<i className="fas fa-envelope-open-text"></i> Contact Me
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Start Home Page */}

			<div className="home" id="home">
				<div className="info">
					<h2>
						Hello, I'm <span data-text="Mahmoud..">Mahmoud..</span>
					</h2>
					<p>
						I'm A <span data-text="FrontendDeveloper">FrontendDeveloper</span>
					</p>
					<a href="#projects">View My Work</a>
					<div className="social">
						<a
							href="https://www.linkedin.com/in/mahmoud-saber-49a483214/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a
							href="https://github.com/Rogar-IQ"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github-alt"></i>
						</a>
						<a
							href="https://www.facebook.com/RogarIQ147"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-facebook-f"></i>
						</a>
						<a
							href="https://twitter.com/Mahmoud46267002"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-twitter"></i>
						</a>
					</div>
				</div>
			</div>

			{/* End Home Page */}
		</>
	);
};

export default Intro;
