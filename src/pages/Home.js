import React, { Component } from 'react';
import HomeHeader from '../components/layout/HomeHeader'
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import PostList from '../components/post/PostList';
import SideMenu from '../components/layout/SideMenu';

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