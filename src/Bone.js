import React from "react";
import "./Bone.scss";
const Bone = ({ counts }) => {
	return (
		<div className="Restaurant loading col-lg-4">
			{counts && [ ...Array(counts) ].map((_, i) => <div key={i} className="loading__bar" />)}
		</div>
	);
};

export default Bone;
