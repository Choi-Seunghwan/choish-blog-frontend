import React, { Component } from 'react';
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import BannerHeader from '../components/layout/BannerHeader';
import DevlogList from '../components/devlog/DevlogList';

class Tag extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        return (
            <Layout>
                <BannerHeader path="devlog" title={"DevLog"} subtitle={"개발 일지"}/>
                <Main>
                    <DevlogList />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}


export default Tag;
