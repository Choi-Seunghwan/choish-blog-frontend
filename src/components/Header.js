import React, { Component } from 'react';
import NavBar from './NavBar';

class Header extends Component {

    render() {
        return (
            <header className="site-header outer">
                <div className="inner" >
                    <NavBar />
                </div>
            </header>
        )
    }
}

export default Header;