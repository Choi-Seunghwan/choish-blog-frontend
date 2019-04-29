import React, { Component } from 'react';
import HomeHeader from '../components/HomeHeader'
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import PostList from '../components/PostList';
import SideMenu from '../components/SideMenu';

class Home extends Component {


    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        return (
            <Layout>
                <HomeHeader />
                <SideMenu />
                <Main className="home">
                    <PostList />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}


export default Home;