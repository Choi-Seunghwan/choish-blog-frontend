import React, { Component } from 'react';
import PostCard from './PostCard';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostList extends Component {

	fetchAndFilterPosts(){
		let filter = {
			tag: "",
		}
		if(this.props.params)
			if (this.props.params.match.params.tag){
				filter.tag = this.props.params.match.params.tag;
			}
		
		this.props.fetchPosts(filter);
	}

	componentDidMount() {
		this.fetchAndFilterPosts();
	}

	componentDidUpdate(prevProps){
		if(this.props.params)
			if(this.props.params.match.path !== prevProps.params.match.path
				|| this.props.params.match.params.tag !== prevProps.params.match.params.tag){
					this.fetchAndFilterPosts()
			}
	}

	renderPostCard() {
		const items = this.props.posts.results;
	
		if(!items) {return (<div></div>);};
		let postCards = []
		items.forEach(function (i, index) {
			postCards.push(<PostCard post={i} key={index} />)
		});
		return postCards
	}

	render() {
		return (	
			<div className="post-list">
				{this.renderPostCard()}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts.all,
})

export default connect(mapStateToProps, {fetchPosts, })(PostList);
