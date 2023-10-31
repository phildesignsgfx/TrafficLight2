import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

    const [ selectedColor, seSelectedColor ] = useState ["red"];

	


	return (
		<div className="traffic-light">
		    <div className={"light red" + ((selectedColor === "red") ? "glow" : "")}></div>
		    <div className={"light yellow" + ((selectedColor === "yellow") ? "glow" : "") }></div>
		    <div className={"light green" + ((selectedColor === "green") ? "glow" : "")}></div>
		</div>
	);
};

export default Home;
