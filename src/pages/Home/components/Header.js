import React from "react";
// import '../style.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Bell } from "react-feather";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import SvgIcon from "@material-ui/core/SvgIcon";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },

    img: {
        maxHeight: 55,
    },

    grow: {
       flexGrow: 1, 
    },

    userSection: {
        display: 'flex',
        alignItems: 'center',
    },

    button: {
       marginRight: 10,
    },

    bell: {
        marginRight: 10,
    }

});

function Header() {

    const classes = useStyles();

    return (
        <AppBar position='fixed' color='inherits 'className={classes.appBar}>
        <ToolBar>
            <img src="/images/logo.png" alt="logo" className={classes.img} />
            <div className={classes.grow}></div>
            <div className={classes.userSection}>
                <Button 
                    color='primary' 
                    variant='contained' 
                    className={classes.button}
                >
                    Novo Post
                </Button>
                <SvgIcon className={classes.bell}>
                    <Bell></Bell>
                </SvgIcon>
                <Avatar alt="Cristiano" src="/" />
            </div>
            {/* <div>
                <a href="/">Conecta Dev - Alteração</a>
                <input type='text'></input>
            </div>
            <div>
                <span>Img1</span>
                <span>Img2</span>
            </div> */}
        </ToolBar>
        </AppBar>
    );
}

export default Header;