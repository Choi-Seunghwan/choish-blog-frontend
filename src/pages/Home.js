import React, { Component } from 'react';
import {MDBView, MDBContainer, MDBRow } from "mdbreact";

class Home extends Component {
    
    state = {
        collapsed: false
    }

    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        <div id="home">
            <MDBView>
                <MDBContainer>
                    <MDBRow>
                        haha
                    </MDBRow>
                </MDBContainer>
            </MDBView>
            
        </div>
    }
};

export default Home;