import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';
import PostDetail from '../components/post/PostDetail';
import DisqusThread from '../components/DisqusThread';
import DevlogDetail from '../components/devlog/DevlogDetail';
import Author from '../components/Author';


class Detail extends Component {

    renderDetailPage(){
        let pathname = this.props.location.pathname.split('/')[1];

        if (pathname === "post")
            return(<PostDetail params={this.props}/>)
        else if (pathname == "devlog")
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
                <Main>
                    { this.renderDetailPage() }
                    <Author />
                    <DisqusThread 
                        id = { this.props.location.pathname }
                        title = { this.props.match.params.slug }
                        path = { this.props.location.pathname }
                    />
                </Main>
                <Footer />
            </Layout>
        )
    }
}

export default Detail;