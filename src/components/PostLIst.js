import React, { Component } from 'react';
import PostCard from './PostCard';
import img1 from '../asset/img/post1.jpg';
import img2 from '../asset/img/post2.jpg';
import img3 from '../asset/img/post3.jpg';


class PostList extends Component {
	constructor(props){
		super(props);

		this.state = {
			cardList: [
				{
					title: "title1",
					link: "#1",
					content: "content1 content1 content1 content1 content1 content1 content1 content1 content1 content1 content1 content1 content1 content1 ",
					tag: "tag1",
					image: img1,
				},
				{
					title: "title2",
					link: "#2",
					content: "content2 content2 content2 content2 content2 content2 content2 content2 content2 content2content2 content2 content2 content2",
					tag: "tag2",
					image: img2
				},
				{
					title: "title3",
					link: "#3",
					content: "contents contents contents contents contents contents ",
					tag: "tag3",
					image: img3,
				},
				{
					title: "title4 title4 title4 title4 title4 title4",
					link: "#3",
					content: "contents contents contents contents contents contents ",
					tag: "tag3",
					image: img3,
				},
				{
					title: "title5",
					link: "#3",
					content: "contents contents contents contents contents contents ",
					tag: "tag3",
					image: img3,
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
