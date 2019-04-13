import React, { Component } from 'react';
import PostCard from './PostCard';
import axios from 'axios';

// import img1 from '../asset/img/post1.jpg';
// import img2 from '../asset/img/post2.jpg';
// import img3 from '../asset/img/post3.jpg';

const API_URL = 'http://localhost:8000';


class PostList extends Component {


	constructor(props) {
		super(props);
		this.state = {
			items: [],
		}
	}

	async getPostList() {
		const response =  await axios.get(`${API_URL}/api/posts`)
		.then( (res) => {
			this.setState({
				items: res.data.results,
			})
			console.log(res)
			return res;
		}).catch((error) => {
			console.log("PostList Axios Error")
			console.error(error);
		})	
	}

	componentDidMount() {
		this.getPostList();
	}

	draw_post_card() {
		let postCards = []
		this.state.items.forEach(function (i, index) {
			postCards.push(<PostCard item={i} key={index} />)
		});

		return postCards
	}

	render() {
		

		return (
			this.state.items.length
			?
			<div className="post-list">
				{this.draw_post_card()}
			</div>
			:
			<div className="post-list">
				<p>data empty</p>
			</div>
		)
	}
}

export default PostList;
