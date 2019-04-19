import React, { Component } from 'react';
import HomeHeader from '../components/HomeHeader'
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import PostList from '../components/PostList';

class Home extends Component {
    render(){
        return (
            <Layout>
                <HomeHeader />
                <Main className="home">
                    <PostList />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}


export default Home;