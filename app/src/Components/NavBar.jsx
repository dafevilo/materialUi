import React from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, makeStyles } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title:{
        flexGrow: 1
    }
    
}))

const NavBar = (props) => {

    const classes = useStyles()

    return (
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <IconButton 
                    color='inherit' 
                    aria-label='menu' 
                    className={classes.menuButton}
                    onClick={() => props.handlerOpen()}
                > 
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    NavBar
                </Typography>
                <Button variant="text" color="inherit">
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default NavBar
