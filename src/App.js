import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { info: '' };
	}
	setInfo = (info) => {
		this.setState({ info: info });
	};
	render() {
		console.log('app state', this.state);
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route
					path="/login"
					render={(routeProps) => (
						<LoginPage history={routeProps.history} setInfo={this.setInfo} />
					)}
				/>
			</Switch>
		);
	}
}

export default App;
