import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<nav className={"nav "+ this.props.className} >

				<div className="nav-left">
					<ul className="nav-ul">
						<li className="nav-li"><Link to="/">Home</Link></li>
						<li className="nav-li"><Link to="/about">About</Link></li>
						<li className="nav-li"><Link to="/tag/project">Project</Link></li>
						<li className="nav-li"><Link to="/devlog">Devlog</Link></li>
						<li className="nav-li"><Link to="/tag/IT">IT</Link></li>
					</ul>
				</div>

				<div className="nav-right">
					<div className="nav-icons">
						<a className="nav-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/Choi-Seunghwan"><i className="fa fa-github fa-lg"></i></a>
						<a className="nav-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/seunghwan-choi-tech/"><i className="fa fa-linkedin fa-lg"></i></a>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavBar;
