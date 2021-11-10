import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import KitchenIcon from '@material-ui/icons/Kitchen';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/chocolate.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={Logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Chocolate Mart
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                        <div className={classes.button} >
                            <IconButton component={Link} to="/cart" aria-label="show cart Items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <KitchenIcon />
                                </Badge>
                            </IconButton>
                        </div>)
                    }
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar
