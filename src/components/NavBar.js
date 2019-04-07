import React, { Component } from 'react';


class NavBar extends Component {
	render() {
		return (
			<nav className={"site-nav "+ this.props.className} >

				<div className="site-nav-left">
					<ul className="nav-ul">
						<li className="nav-li"><a href="/#">Home</a></li>
						<li className="nav-li"><a href="/#">About</a></li>
						<li className="nav-li"><a href="/#">dev.log</a></li>
						<li className="nav-li"><a href="/#">Python</a></li>
						<li className="nav-li"><a href="/#">Backend</a></li>
					</ul>
				</div>

				<div className="site-nav-right">
					<div className="nav-icons">
						<a className="nav-icon" href="/#"><i className="fa fa-github fa-2x"></i></a>
						<a className="nav-icon" href="/#"><i className="fa fa-github fa-2x"></i></a>
						<a className="nav-icon" href="/#"><i className="fa fa-github fa-2x"></i></a>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavBar;
