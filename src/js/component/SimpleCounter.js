import React from "react";

const SimpleCounter = (props) => {
	return (
		<div className="d-flex">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="seconds digitSix">{props.digitSix % 10}</div>
			<div className="seconds digitFive">{props.digitFive % 10}</div>
			<div className="seconds digitFour">{props.digitFour * 10}</div>
			<div className="seconds digitThree">{props.digitThree % 10}</div>
			<div className="seconds digitTwo">{props.digitTwo % 10}</div>
			<div className="seconds digitOne">{props.digitOne % 10}</div>
		</div>
	);
};

export default SimpleCounter;
