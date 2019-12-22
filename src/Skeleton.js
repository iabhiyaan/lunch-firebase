import React from "react";
import "./Skeleton.scss";
const Skeleton = ({ marginTop, loadingName }) => {
	return (
		<ul className="notice-list mx-auto" style={{ marginTop }}>
			<li className="notice--loading">
				<div className="notice--loading__header">
					<div className="notice--loading__img" />
					{loadingName && <div className="notice--loading__name" />}
				</div>
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
			</li>
			{/* <li className="notice--loading">
				<div className="notice--loading__header">
					<div className="notice--loading__img" />
					<div className="notice--loading__name" />
				</div>
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
			</li>
			<li className="notice--loading">
				<div className="notice--loading__header">
					<div className="notice--loading__img" />
					<div className="notice--loading__name" />
				</div>
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
			</li>
			<li className="notice--loading">
				<div className="notice--loading__header">
					<div className="notice--loading__img" />
					<div className="notice--loading__name" />
				</div>
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
			</li>
			<li className="notice--loading">
				<div className="notice--loading__header">
					<div className="notice--loading__img" />
					<div className="notice--loading__name" />
				</div>
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
				<div className="notice--loading__bar" />
			</li> */}
		</ul>
	);
};

export default Skeleton;
