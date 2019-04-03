import React, { Component } from 'react';


class PostCard extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            item: props.item
        }
    }

	render() {
        console.log(this.state.item)

		return (
			<article className="post-card">
                <a href=" ">
                    <div className="post-card-image" style={{}} />
                </a>
                <div className="post-card-content">
                    <header className="post-card-header"></header>
                    {this.state.item.title}
                </div>

            </article>
		)
	}
}

export default PostCard;
