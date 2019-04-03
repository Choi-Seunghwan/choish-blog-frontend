import React, { Component } from 'react';
import PostCard from './PostCard';

class PostList extends Component {
	constructor(props){
		super(props);

		this.state = {
			cardList: [
				{
					title: "title1",
					link: "#1",
					contents: "contents1",
					tag: "tag1",
					image: "",
				},
				{
					title: "title2",
					link: "#2",
					contents: "contents2",
					tag: "tag2",
					image: "",
				},
				{
					title: "title3",
					link: "#3",
					contents: "contents3",
					tag: "tag3",
					image: "",
				},
				
			]
		}
	}


	get_post_list(){
		
	}
	
	draw_post_card(){
		let postCards = []
		this.state.cardList.forEach(function(i, index){
			postCards.push( <PostCard item={i} key={index}/> )
		});


		console.log(postCards)
		return postCards
	}

	render() {
		return (
			<div className="post-list">
                {this.draw_post_card()}
            </div>
		)
	}
}

export default PostList;
