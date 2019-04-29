import React, { Component } from 'react';
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import BannerHeader from '../components/BannerHeader';
import SideMenu from '../components/SideMenu';
import DevlogList from '../components/DevlogList';

class Tag extends Component {
    render(){
        return (
            <Layout>
                <BannerHeader params={this.props} title={"DevLog"} subtitle={"DevLog..."}/>
                <SideMenu />
                <Main>
                    <DevlogList />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}


export default Tag;
