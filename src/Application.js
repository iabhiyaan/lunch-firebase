import React, { Component } from "react";
// import map from "lodash/map";

import { auth, database } from "./firebase";
import CurrentUser from "./CurrentUser";
import SignIn from "./SignIn";
import NewRestaurant from "./NewRestaurant";
import Restaurants from "./Restaurants";
import Restaurant from "./Restaurant";
import Loading from "./Loading";
import "./Application.css";

class Application extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
			loading: true,
			restaurants: null
		};
		this.restaurantRef = database.ref("/restaurants");
	}

	componentDidMount() {
		auth.onAuthStateChanged((currentUser) => {
			if (currentUser) {
				console.log(`Current User is ${currentUser.displayName}`);

				this.setState({
					loading: false,
					currentUser
				});
				this.restaurantRef.on("value", (snapShot) => {
					this.setState({
						restaurants: snapShot.val()
					});
				});
			} else {
				this.setState({
<<<<<<< HEAD
					...this.state,
					currentUser: null,
					loading: false
=======
					loading: false,
>>>>>>> ea07baee52ddd8c2e23bcec7bd0f240eb0befa65
				});
			}
		});
	}
	render() {
		let cUser;
		const { currentUser, loading, restaurants } = this.state;
		if (currentUser && !loading) {
			cUser = (
				<div>
					<NewRestaurant />
					<CurrentUser user={currentUser} />
					<Restaurants restaurants={restaurants} user={currentUser} />
<<<<<<< HEAD

					{/* ----😎 Using library 😎--- */}
					{/* {map(restaurants, (restaurant, key) => <p key={key}> {restaurant.name} </p>)} */}
					{/* 😎😎 Using keys long and confusing but useful though 😀😀  */}

					{/* {restaurants &&
						Object.keys(restaurants).map((restaurant, key) => (
							<p key={key}>
								<span className="font-weight-bold">{restaurants[restaurant].name}</span> is great place ho
								hangout
							</p>
						))} */}
=======
					<CurrentUser user={currentUser} />
>>>>>>> ea07baee52ddd8c2e23bcec7bd0f240eb0befa65
				</div>
			);
		} else if (!currentUser) {
			cUser = loading && <Loading />;
			// cUser = loading && <p>Loading...</p>;
			if (!loading) {
				cUser = <SignIn />;
			}
		}
		return (
			<div className="Application container">
				<header className="Application--header">
					<h1>Lunch Rush</h1>
					{cUser}
				</header>
			</div>
		);
	}
}

export default Application;
