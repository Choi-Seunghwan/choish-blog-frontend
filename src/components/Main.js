import React, { Component } from 'react';

class Main extends Component {

    render() {
        return (
            <div className={"site-main outer " + this.props.className}>
                <div className="inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;