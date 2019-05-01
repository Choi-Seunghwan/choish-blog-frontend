import React, { Component } from 'react';
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import EditHeader from '../components/editor/EditHeader';
import SideMenu from '../components/layout/SideMenu';
import MyEditor from '../components/editor/MyEditor';

class Edit extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        return (
            <Layout>
                <EditHeader />
                <SideMenu />
                <Main>
                    <MyEditor params={this.props}/>
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}

export default Edit;
