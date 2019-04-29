import React, { Component } from 'react';
import { Drawer, List , ListItem , ListItemIcon, ListItemText, Divider   } from '@material-ui/core';
import { Link } from 'react-router-dom';

class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            left : false,
            tabPos : 0,
        }
    }

    tabEventListener = (e) => {
		let windowScrollY = window.scrollY;

        this.setState({ tabPos: windowScrollY+230})

        console.log(this.state.tabPos);
    }

    componentDidMount() {
		window.addEventListener('scroll', this.tabEventListener);
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
    };

    render() {
        return (
            <header>
                <Drawer classes={{ paper: 'sidemenu-paper'}} 
                open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}>

                    </div>
                    <div className="sidemenu-logo">
                        <p className="sidemenu-logo-title">Choi Seunghwna</p>
                        
                        <List>
                            <ListItem button key={0} component={Link} to="/about">
                                <ListItemText primary={"About"} />
                            </ListItem>
                            <ListItem button key={1} component={Link} to="/devlog">
                                <ListItemText primary={"Devlog"} />
                            </ListItem>
                            <ListItem button key={2} component={Link} to="/tag/project">
                                <ListItemText primary={"Project"} />
                            </ListItem>
                            <ListItem button key={3} component={Link} to="/tag/python">
                                <ListItemText primary={"Python"} />
                            </ListItem>
                            <ListItem button key={4} component={Link} to="/tag/react">
                                <ListItemText primary={"React"} />
                            </ListItem>
                        </List>
                        <Divider />
                    </div>
                    <div className="sidemenu-draw"  onClick={ this.toggleDrawer('left', false) }>
                     <i className="fa fa-chevron-left" style={{marginLeft: "3px"}} /> </div>
                    
                </Drawer>
                <div className="sidemenu-tab" style={{top: this.state.tabPos+"px"}} onClick={ this.toggleDrawer('left', true) }>
                    <i className="fa fa-chevron-right" style={{marginLeft: "3px"}} />  </div>

                
            </header>
        )
    }

}

export default SideMenu;