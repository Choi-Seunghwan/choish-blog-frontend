import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core';


class HiddenNavBar extends Component {
	_istMounted = false

	constructor(props){
		super(props)
		this.state = {
			transform: "translateY(-100%)",
			scrollRate: 50,
		}
	}

	scrollEventListener = (e) => {
		if( this._istMounted ){
			let windowScrollY = window.scrollY;
			let innerHeight = window.innerHeight;
			let bodyElement = document.getElementById('root');
			let root = bodyElement.getBoundingClientRect();
			let heightHtml = root.height;
			let scrollMax = Math.ceil( heightHtml - innerHeight);


			// scroll event. hiddenNav visible or unvisible
			if (windowScrollY < 250) {
				this.setState({ transform: "translateY(-100%)" })
			}else {
				this.setState({ transform: "translateY(0%)"})
			}
			
			// scroll evnet. get progressbar scoll rate
			let scrollRate = parseInt( (windowScrollY / scrollMax) * 100, 10);
			this.setState({scrollRate: scrollRate })
		}
	}

	setTitle() {
		let title = "title";
		let path = window.location.pathname.split('/')[1];
		if(this.props.title)
			title = this.props.title
		else
			title = this.props.item_title;
		
		return title;
	}

	componentDidMount() {
		this._istMounted = true
		window.addEventListener('scroll', this.scrollEventListener)
	}

	componentWillUnmount() {
		this._istMounted = false
		window.removeEventListener('scroll', this.scrollEventListener);
	}

	render() {
	
		const title = this.setTitle();
		return (
			<nav className={"hidden-nav"} style={{transform : this.state.transform}}>
				{/* <div className="hidden-nav-menu"><i className="fa fa-bars fa-2x"></i></div> */}
				<Link to="/">
					<div className="hidden-nav-logo">
						<span>SH Tech Blog</span>
					</div>
				</Link>
				<div className="hidden-nav-title">
					<span>{ title }</span>
				</div>
				
				<div className="hidden-nav-end">
					<div className="nav-icons">
						<a className="nav-icon" target="_blank" rel="noopener noreferrer"
							href="https://github.com/Choi-Seunghwan"><i className="fa fa-github fa-2x"></i></a>
						<a className="nav-icon" target="_blank" rel="noopener noreferrer"
							href="https://www.linkedin.com/in/seunghwan-choi-tech/"><i className="fa fa-linkedin fa-2x"></i></a>
					</div>
				</div>
				<div className="hidden-nav-progressbar">
					<LinearProgress variant="determinate" value={this.state.scrollRate}/>
				</div>
			</nav>
		)
	}
}

const mapStateToProps = (state) => ({
	item_title: state.items.title
})


export default connect(mapStateToProps,{})(HiddenNavBar);;
