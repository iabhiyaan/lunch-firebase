import React, { Component } from "react";
// import map from "lodash/map";
// import Skeleton from "react-loading-skeleton";

import { auth, database } from "./firebase";
import CurrentUser from "./CurrentUser";
import SignIn from "./SignIn";
import NewRestaurant from "./NewRestaurant";
import Restaurants from "./Restaurants";
import Restaurant from "./Restaurant";
import Loading from "./Loading";
import Skeleton from "./Skeleton";

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
					loading: false,
					currentUser: null
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
				</div>
			);
		} else if (!currentUser) {
			// cUser = loading && <Skeleton skull={true} amount={3} direction={'row'} />;
			cUser = loading && <Skeleton marginTop="100px" loadingName />;
			// cUser = loading && <Loading marginTop="90px" />;

			if (!loading) {
				cUser = <SignIn />;
			}
		}
		return (
			<div className="Application container">
				<header className="Application--header">
					<h1>Lunch Rush</h1>
					{/* <Skeleton loadingName /> */}
					{cUser}
				</header>
			</div>
		);
	}
}

export default Application;
