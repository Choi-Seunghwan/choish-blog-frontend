import React, { Component } from 'react';
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import PostList from '../components/post/PostList';
import SideMenu from '../components/layout/SideMenu';
import BannerHeader from '../components/layout/BannerHeader';

class Home extends Component {


    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        return (
            <Layout>
                <BannerHeader path="home" title="Choi Seunghwan Tech Blog" subtitle="subsubsub" />
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