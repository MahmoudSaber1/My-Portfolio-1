import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { HTMLCSS, Javascript, Bootstrap, Reactjs, MernStack } from "../../data";
import "./portfolio.css";

export default function Portfolio() {
	const [selected, setSelected] = useState("HTMLCSS");
	const [data, setData] = useState([]);
	const list = [
		{
			id: "HTMLCSS",
			title: "HTML & CSS",
		},
		{
			id: "JavaScript",
			title: "JavaScript",
		},
		{
			id: "Bootstrap",
			title: "Bootstrap",
		},
		{
			id: "Reactjs",
			title: "Reactjs",
		},
		{
			id: "MernStack",
			title: "MernStack",
		},
	];

	useEffect(() => {
		switch (selected) {
			case "HTMLCSS":
				setData(HTMLCSS);
				break;
			case "JavaScript":
				setData(Javascript);
				break;
			case "Bootstrap":
				setData(Bootstrap);
				break;
			case "Reactjs":
				setData(Reactjs);
				break;
			case "MernStack":
				setData(MernStack);
				break;
			default:
				setData(HTMLCSS);
		}
	}, [selected]);

	return (
		<div className="portfolio section-pd" id="projects">
			<div className="container">
				<div className="headeing">
					<h3>Projects</h3>
					<h3>Projects</h3>
				</div>
				<ul>
					{list.map((item) => (
						<PortfolioList
							title={item.title}
							active={selected === item.id}
							setSelected={setSelected}
							id={item.id}
							link={item.link}
						/>
					))}
				</ul>
				<div className="images">
					{data.map((d) => (
						<div className="item">
							<img src={d.img} alt="" />
							<div className="info">
								<h3>{d.title}</h3>
								<a href={d.link} target="_blank" rel="noreferrer">
									Demo <i className="fas fa-arrow-right"></i>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
