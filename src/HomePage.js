import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	render() {
		return (
			<div>
				This is Homepage
				<div>
					<Link to="/login">login</Link>
				</div>
			</div>
		);
	}
}

export default HomePage;
