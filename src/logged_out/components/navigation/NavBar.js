import React, { memo } from "react";
import PropTypes from "prop-types";
import {
    AppBar,
    Toolbar,
    withStyles,
    Typography,
    Button,
} from "@material-ui/core";

import logo from './jankLogo.png'

const styles = theme => ({
    appBar: {
        boxShadow: theme.shadows[6],
        backgroundColor: theme.palette.common.white
    },
    toolbar: {
        display: "flex",
        // justifyContent: 'center',
    },
    menuButtonText: {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.h6.fontWeight
    },
    brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 400
    },
    noDecoration: {
        textDecoration: "none !important"
    },
    title: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        margin: 10
    }
});

function NavBar(props) {
    const { classes } = props;
    
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <img
                        src={logo}
                        alt='extend protocol logo'
                        height='55px'
                    />

                    <Typography
                        className={classes.title}
                        variant="h4"
                        color="textSecondary"
                    >
                        Extend
                    </Typography>

                    <Button
                        target='_blank'
                        href='https://wrapped-token.github.io/demo'
                    >
                        Demo
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    handleMobileDrawerOpen: PropTypes.func,
    handleMobileDrawerClose: PropTypes.func,
    mobileDrawerOpen: PropTypes.bool,
    selectedTab: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
