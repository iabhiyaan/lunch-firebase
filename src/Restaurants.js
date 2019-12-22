import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import map from "lodash/map";

import { database } from "./firebase";
import Restaurant from "./Restaurant";
import "./Restaurants.css";
import Loading from "./Loading";

class Restaurants extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	handleVotes(key) {
		const currentUser = this.props.user;
		database.ref("/restaurants").child(key).child("votes").child(currentUser.uid).set(currentUser.displayName);
	}
	handleUnVotes(key) {
		const currentUser = this.props.user;
		database.ref("/restaurants").child(key).child("votes").child(currentUser.uid).remove();
	}
	render() {
		const { restaurants, user } = this.props;
		const getLoaders = Array.from({ length: 3 }).map((_, i) => (
			<div className="col-lg-4">
				<Loading key={i} />
			</div>
		));
		return (
			<section className="Restaurants row">
				{restaurants ? (
					map(restaurants, (restaurant, key) => {
						return (
							<Restaurant
								key={key}
								{...restaurant}
								user={user}
								handleVotes={() => this.handleVotes(key)}
								handleUnVotes={() => this.handleUnVotes(key)}
							/>
						);
					})
				) : (
					getLoaders
				)}
			</section>
		);
	}
}

Restaurants.propTypes = {
	user: PropTypes.object,
	restaurantsRef: PropTypes.object,
	restaurants: PropTypes.object
};

export default Restaurants;
