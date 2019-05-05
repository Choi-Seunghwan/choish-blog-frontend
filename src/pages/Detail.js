import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import SideMenu from '../components/layout/SideMenu';
import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';
import PostDetail from '../components/post/PostDetail';
import DisqusThread from '../components/DisqusThread';
import DevlogDetail from '../components/devlog/DevlogDetail';
import Author from '../components/Author';


class Detail extends Component {

    renderDetailPage(){
        let path = this.props.location.pathname.split('/')[1];

        if (path === "post")
            return(<PostDetail params={this.props}/>)
        else if (path == "devlog")
            return(<DevlogDetail params={this.props}/>)
        else
            return(<div></div>)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <Layout>
                <Header />
                <SideMenu />
                <Main>
                    { this.renderDetailPage() }
                    <Author />
                    <DisqusThread />
                </Main>
                <Footer />
            </Layout>
        )
    }
}

export default Detail;