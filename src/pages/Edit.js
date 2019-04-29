import React, { Component } from 'react';
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import EditHeader from '../components/EditHeader';
import SideMenu from '../components/SideMenu';
import MyEditor from '../components/MyEditor';

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
