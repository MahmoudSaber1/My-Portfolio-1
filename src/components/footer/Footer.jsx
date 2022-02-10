import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<h3>Created By Mahmoud Saber</h3>
			<div className="social">
				<a
					href="https://www.linkedin.com/in/mahmoud-saber-49a483214/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-linkedin-in"></i>
				</a>
				<a href="https://github.com/Rogar-IQ" target="_blank" rel="noreferrer">
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
	);
};

export default Footer;
