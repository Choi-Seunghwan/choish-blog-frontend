import React, { Component } from 'react';
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import BannerHeader from '../components/layout/BannerHeader';
import SideMenu from '../components/layout/SideMenu';
import DevlogList from '../components/devlog/DevlogList';

class Tag extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        return (
            <Layout>
                <BannerHeader params={this.props} title={"DevLog"} subtitle={"기록되지 않은 것은 기억되지 않는다"}/>
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
