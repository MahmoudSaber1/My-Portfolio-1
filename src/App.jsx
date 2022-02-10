import React from "react";
import { About, Contact, Intro, Portfolio, Footer } from "./components";

const App = () => {
	return (
		<div>
			<Intro />
			<About />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
