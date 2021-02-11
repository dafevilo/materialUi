import React, {useState} from 'react'

import{
    Button,
    Hidden,
    makeStyles,

} from '@material-ui/core'
import NavBar from './NavBar'
import Cajon from './Cajon'
import Cajita from './Cajita'

const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
}))

const Contenedor = () => {

    const classes = styles()
    const[action, setAction] = useState(false)

    const handlerOpen = () => {
        setAction(!action)
    }

    return (
        <div className={classes.root}>
            <NavBar handlerOpen={handlerOpen}/>
            <Hidden>
                <Cajon 
                    variant='temporary'
                    open={action}
                    onClose={handlerOpen}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Cajita />
            </div>

        </div>
    )
}

export default Contenedor
