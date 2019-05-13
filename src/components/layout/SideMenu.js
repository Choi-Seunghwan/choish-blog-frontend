import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

class SideMenu extends Component {
    _istMounted = false

    constructor(props) {
        super(props);
        this.state = {
            left: false,
            tabPos: 0,
            isLoading: true
        }
    }

    tabEventListener = (e) => { 
        if( this._istMounted ){
            let windowScrollY = window.scrollY;
            this.setState({ tabPos: windowScrollY + 230 })
        }
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    componentDidMount(){
        this._istMounted = true
        window.addEventListener('scroll', this.tabEventListener);
    }

    componentWillUnmount(){
        this._istMounted = false
        window.removeEventListener('scoll', this.tabEventListener);
    }

    render() {
        return (
            <nav>
                <Drawer classes={{ paper: 'sidemenu-paper' }}
                    open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}>

                    </div>
                    <div className="sidemenu-logo">
                        <Link to="/" onClick={ this.toggleDrawer('left', false) }>
                            <p className="sidemenu-logo-title">Choi Seunghwan</p>
                            <p className="sidemenu-logo-subtitle">Tech Blog  </p>
                        </Link>
                        <List>
                            <ListItem button key={0} component={Link} to="/about" onClick={this.toggleDrawer('left', false)}>
                                <ListItemText classes={{ root: 'sidemenu-text' }} primary={"About"} />
                            </ListItem>
                            <ListItem button key={1} component={Link} to="/tag/Project" onClick={this.toggleDrawer('left', false)}>
                                <ListItemText classes={{ root: 'sidemenu-text' }} primary={"Project"} />
                            </ListItem>
                            <ListItem button key={2} component={Link} to="/devlog" onClick={this.toggleDrawer('left', false)}>
                                <ListItemText classes={{ root: 'sidemenu-text' }} primary={"Devlog"} />
                            </ListItem>
                            <ListItem button key={3} component={Link} to="/tag/Frontend" onClick={this.toggleDrawer('left', false)}>
                                <ListItemText classes={{ root: 'sidemenu-text' }} primary={"Frontend"} />
                            </ListItem>
                            <ListItem button key={4} component={Link} to="/tag/Backend" onClick={this.toggleDrawer('left', false)}>
                                <ListItemText classes={{ root: 'sidemenu-text' }} primary={"Backend"} />
                            </ListItem>
                            <ListItem button key={5} component={Link} to="/tag/Programming" onClick={this.toggleDrawer('left', false)}>
                                <ListItemText classes={{ root: 'sidemenu-text' }} primary={"Programming"} />
                            </ListItem>
                            <ListItem button key={6} component={Link} to="/tag/IT" onClick={this.toggleDrawer('left', false)}>
                                <ListItemText classes={{ root: 'sidemenu-text' }} primary={"IT"} />
                            </ListItem>
                            <ListItem button key={7} component={Link} to="/tag/Life" onClick={this.toggleDrawer('left', false)}>
                                <ListItemText classes={{ root: 'sidemenu-text' }} primary={"Life"} />
                            </ListItem>
                        </List>
                        <Divider />
                            <div className="nav-icons">
                            <a className="nav-icon" target="_blank" rel="noopener noreferrer"
                                href="https://github.com/Choi-Seunghwan"><i className="fa fa-github fa-2x"></i></a>
                            <a className="nav-icon" target="_blank" rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/seunghwan-choi-tech/"><i className="fa fa-linkedin fa-2x"></i></a>
                        </div>
                        <div>
                            <p>© copyright 2019</p>
                            <p>Choi Seunghwan All rights Reserved</p>
                        </div>
                    </div>
                    <div className="sidemenu-draw" onClick={this.toggleDrawer('left', false)}>
                        <i className="fa fa-chevron-left" style={{ marginLeft: "3px" }} /> </div>

                </Drawer>
                <div className="sidemenu-tab" style={{ top: this.state.tabPos + "px" }} onClick={this.toggleDrawer('left', true)}>
                    <i className="fa fa-chevron-right" style={{ marginLeft: "3px" }} />  </div>


            </nav>
        )
    }

}

export default SideMenu;