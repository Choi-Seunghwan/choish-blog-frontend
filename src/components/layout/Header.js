import React, { Component } from 'react';
import NavBar from './NavBar';
import HiddenNavBar from './HiddenNavBar';

class Header extends Component {

    render() {
        return (
            <header className="site-header outer">
                <div className="inner" >
                    <NavBar />
                    <HiddenNavBar title={this.props.title}/>
                </div>
            </header>
        )
    }
}

export default Header;