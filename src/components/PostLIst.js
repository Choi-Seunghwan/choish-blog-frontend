import React, { Component } from 'react';
import PostCard from './PostCard';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

// import img1 from '../asset/img/post1.jpg';
// import img2 from '../asset/img/post2.jpg';
// import img3 from '../asset/img/post3.jpg';


class PostList extends Component {


	constructor(props) {
		super(props);
		
	}

	// async getPostList() {
	// 	await axios.get(`${API_URL}/api/posts`)
	// 	.then( (res) => {
	// 		this.setState({
	// 			items: res.data.results,
	// 		})
	// 		return res;
	// 	}).catch((error) => {
	// 		console.log("PostList Axios Error")
	// 		console.error(error);
	// 	})	
	// }

	componentDidMount() {
		// this.getPostList();
		this.props.fetchPosts();
	}

	renderPostCard() {
		const items = this.props.posts.results;
		
		if(!items) {return (<div></div>);};
		let postCards = []
		items.forEach(function (i, index) {
			postCards.push(<PostCard item={i} key={index} />)
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
