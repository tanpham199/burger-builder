import React, { Component, Fragment } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    drawerToggleClicked = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        return (
            <Fragment>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.drawerToggleClicked}
                />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerHandler}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect(mapStateToProps)(Layout);
