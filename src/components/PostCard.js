import React, { Component } from 'react';


class PostCard extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            item: props.item
        }
    }

	render() {
		return (
			<article className="post-card">
                <a href="#">
                    <div class="post-card-image" style="" />
                </a>
                <div class="post-card-content">
                    <header class="post-card-header"></header>
                </div>

            </article>
		)
	}
}

export default PostCard;
