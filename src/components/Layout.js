import React, { Component } from 'react';


class Layout extends Component {
	render() {
		return (
			<div class="site-wrapper">

				{this.props.children}

			</div>
		)
	}
}

export default Layout;
