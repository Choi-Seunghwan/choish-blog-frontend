import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PostDetail from '../components/PostDetail';
import DisqusThread from '../components/DisqusThread';
import DevlogDetail from '../components/DevlogDetail';
import Author from '../components/author';


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