import React, { Component } from 'react';
import PropType from 'prop-types';
import Header from '../components/Header'
import Layout from '../components/Layout';

class Main extends Component {
    render(){
        return (
            <Layout>
                <Header />

            </Layout>
        );
    }
    
}

Main.defaultProps = {
    title: "Seunghwan Tech Blog"
}

Main.PropType = {
    title: PropType.string
}


export default Main;