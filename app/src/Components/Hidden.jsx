import React from 'react'
import {withWidth, Typography, Hidden, Button} from '@material-ui/core'

const HiddenComp = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho: {props.width}
            </Typography>
            <Hidden xsDown>
                <Button variant="text" color="default">
                  xs
                </Button>
            </Hidden>
            <Hidden smUp>
                <Button variant="text" color="default">
                  sm
                </Button>
            </Hidden>
            <Hidden only='md'>
                <Button variant="text" color="default">
                  md
                </Button>
            </Hidden>
            <Hidden only={['md', 'sm']}>
                <Button variant="text" color="default">
                  lg
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(HiddenComp)
