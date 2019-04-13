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
						<li className="nav-li"><Link to="/">dev.log</Link></li>
						<li className="nav-li"><Link to="/tag/?tag=tag1">tag1</Link></li>
						<li className="nav-li"><Link to="/tag/?tag=tag2">tag2</Link></li>
					</ul>
				</div>

				<div className="site-nav-right">
					<div className="nav-icons">
						<Link className="nav-icon" to="/"><i className="fa fa-github fa-2x"></i></Link>
						<Link className="nav-icon" to="/"><i className="fa fa-github fa-2x"></i></Link>
						<Link className="nav-icon" to="/"><i className="fa fa-github fa-2x"></i></Link>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavBar;
