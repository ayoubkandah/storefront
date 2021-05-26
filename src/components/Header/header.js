import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {getData,Add} from "../../data/action";
import cookie from "react-cookies"

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default  function Header(props) {
    const state = useSelector((state) => {
        return {
            Category:state.Category,
            Products:state.Products,
            Cart:state.Cart,
        };
    });

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getData())
        let e=cookie.load("cart")
        console.log(e,"cooockie22")

        if(e.length>0){
        e.map((ele)=>{
            console.log(ele,"cooockie")
           dispatch(Add(ele))
        })
        }
    },[])
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <FormGroup>

            </FormGroup>
            <AppBar position="static">
                <Toolbar>

                    <Typography  variant="h6" className={classes.title}>
                        <img src="https://flamingtext.com/net-fu/proxy_form.cgi?script=jump-anim-logo&fontname=Husky+Stash&fontsize=52&text=AK+Store&script=jump-anim-logo&text=AK+Store&fontsize=52&fontname=Husky+Stash&textColor=%23fff&distance=9&transparent=on&imageoutput=true"/>
                    </Typography>
                    <Typography  id="count" className={classes.title}>
                       Cart({state.Cart.length})
                    </Typography>
                    {auth && (
                        <div>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
