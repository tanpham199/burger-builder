import React, { Component, Fragment } from 'react'

import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    drawerToggleClicked = () => {
        this.setState((prevState) => {
            return ({ showSideDrawer: !prevState.showSideDrawer })
        })
    }

    render() {
        return (
            <Fragment>
                <Toolbar drawerToggleClicked={this.drawerToggleClicked} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout;