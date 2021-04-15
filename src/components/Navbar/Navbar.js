import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const useStyle = makeStyles({
    root: {
        flexGrow: 1
    },
    title: {
        color: "purple"
    },
    background: {
        backgroundColor: '#0f0d11'
    }
})

const Navbar = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.background}>
                    <Typography variant="h6" className={classes.title} id="navTitle">Record Revolution</Typography>
                    <Button type="button" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;