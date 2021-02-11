import React from 'react'
import {makeStyles, Drawer, Divider} from '@material-ui/core'
import Lista from './Lista'

const drawerWidth = 260

const styles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper:{
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
}))

const Cajon = (props => {

    const classes = styles()

    return (
        <Drawer 
            className={classes.drawer}
            open={props.open}
            variant={props.variant}
            onClose={props.onClose ? props.onClose : null}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor='left'
        >
            <div className={classes.toolbar}></div>
            <Divider />
            <Lista />
        </Drawer>
    )
})

export default Cajon
