import React, { memo } from "react";
import PropTypes from "prop-types";
import {
    AppBar,
    Toolbar,
    withStyles
} from "@material-ui/core";

const styles = theme => ({
    appBar: {
        boxShadow: theme.shadows[6],
        backgroundColor: theme.palette.common.white
    },
    toolbar: {
        display: "flex",
        justifyContent: "center",
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
                        src={`${process.env.PUBLIC_URL}/images/letterOnlyLogo.svg`}
                        alt="Bruh"
                        height="100"
                        className={classes.logo}
                    />
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
