import React from "react";
import "./Loading.css";
const Loading = () => {
	return (
		<div class="timeline-wrapper">
			<div class="timeline-item">
				<div class="animated-background">
					<div class="background-masker header-top" />
					<div class="background-masker header-left" />
					<div class="background-masker header-right" />
					<div class="background-masker header-bottom" />
					<div class="background-masker subheader-left" />
					<div class="background-masker subheader-right" />
					<div class="background-masker subheader-bottom" />
					<div class="background-masker content-top" />
					<div class="background-masker content-first-end" />
					<div class="background-masker content-second-line" />
					<div class="background-masker content-second-end" />
					<div class="background-masker content-third-line" />
					<div class="background-masker content-third-end" />
				</div>
			</div>
		</div>
	);
};

export default Loading;
