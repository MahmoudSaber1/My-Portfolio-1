import "./contact.css";
import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_5g24lhi",
				"template_gtw3tnn",
				formRef.current,
				"user_Lhkb5qoZhAQRyPAacN1Nr"
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="contact section-pd" id="contact">
			<div className="container">
				<div className="headeing">
					<h3>Contact Me</h3>
					<h3>Contact Me</h3>
				</div>
				<div className="box-container">
					<div className="box">
						<div className="info">
							<i className="fas fa-phone"></i>
							<h3>Phone</h3>
							<span>+20 103-084-3276</span>
						</div>
						<div className="info">
							<i className="fas fa-envelope"></i>
							<h3>Email</h3>
							<a href="mailto:ms5325749@gmail.com">ms5325749@gmail.com</a>
						</div>
					</div>
					<div className="form-box">
						<form ref={formRef} onSubmit={handleSubmit}>
							<input type="text" placeholder="Name" name="user_name" />
							<input type="text" placeholder="Subject" name="user_subject" />
							<input type="text" placeholder="Email" name="user_email" />
							<textarea rows="5" placeholder="Message" name="message" />
							<button>Submit</button>
							{done && "Thank You"}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
