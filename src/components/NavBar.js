import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<nav className={"site-nav "+ this.props.className} >

				<div className="site-nav-left">
					<ul className="nav-ul">
						<li className="nav-li"><Link to="/">Home</Link></li>
						<li className="nav-li"><Link to="/">About</Link></li>
						<li className="nav-li"><Link to="/tag/tag1">Tag1</Link></li>
						<li className="nav-li"><Link to="/devlog">Devlog</Link></li>
						<li className="nav-li"><Link to="/edit">Edit</Link></li>
					</ul>
				</div>

				<div className="site-nav-right">
					<div className="nav-icons">
						<a className="nav-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/Choi-Seunghwan"><i className="fa fa-github fa-lg"></i></a>
						<Link className="nav-icon" to="/"><i className="fa fa-linkedin fa-lg"></i></Link>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavBar;
