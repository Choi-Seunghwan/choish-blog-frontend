import React, { Component } from 'react';
import PropType from 'prop-types';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import PostList from '../components/PostList';

class Home extends Component {
    render(){
        return (
            <Layout>
                <Header />
                <Main>
                    <PostList />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}

Home.defaultProps = {
    title: "Seunghwan Tech Blog"
}

Home.PropType = {
    title: PropType.string
}


export default Home;