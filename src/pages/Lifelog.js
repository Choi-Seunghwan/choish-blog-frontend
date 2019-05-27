import React, { Component } from 'react';
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import BannerHeader from '../components/layout/BannerHeader';
import LifelogList from '../components/lifelog/LifelogList';

class Lifelog extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        return (
            <Layout>
                <BannerHeader path="lifelog" title={"LifeLog"} subtitle={"일상 그리고 개인적인 생각들"}/>
                <Main>
                    <LifelogList />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}


export default Lifelog;
