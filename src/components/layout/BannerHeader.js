import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import mainImg from '../../asset/img/editor.jpg'

class BannerHeader extends Component {

	setBanner(){
		if (this.props.path == "home")
			return {
				title: this.props.title,
				subtitle: this.props.subtitle,
				bannerImg: mainImg,
			}
		else
		if (this.props.path == "tag"){
			let count = this.props.posts.count;
			let tag = this.props.params.match.params.tag;
			return {
				title: tag,
				subtitle: count+ " results for " + "'" + tag + "'",
				bannerImg:'',
			}
		}
		else
			return {
				title: this.props.title,
				subtitle: this.props.subtitle,
				bannerImg: '',
			};
	}

	render() {
		let {title, subtitle, bannerImg } = this.setBanner();

		return (
			<header className="site-header outer banner" style={{ backgroundImage: "url(" + bannerImg + ")" }}>
                <div className="inner" >
					<NavBar />
					<div className="site-header-content">
						<h1 className="site-title">{title} </h1>
						<h4 className="site-subtitle">{subtitle}</h4>
					</div>
				</div>
			</header>
		)
	}
}


const mapStateToProps = (state) => ({
	posts: state.posts.all,
})

export default connect(mapStateToProps,)(BannerHeader);