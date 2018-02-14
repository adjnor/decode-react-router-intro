import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
	handleClick = () => {
		this.props.setInfo('some information');
		this.props.history.push('/');
	};
	render() {
		console.log('login props', this.props);
		return (
			<div>
				This is LoginPage
				<div>
					<Link to="/">home</Link>
				</div>
				<div>
					<button onClick={this.handleClick}>home</button>
				</div>
			</div>
		);
	}
}

export default LoginPage;
