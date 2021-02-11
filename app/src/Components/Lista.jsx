import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'

import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';

const Lista = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <AndroidIcon /> 
                    </ListItemIcon>
                    <ListItemText primary='Android' />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AppleIcon /> 
                    </ListItemIcon>
                    <ListItemText primary='Apple' />
                </ListItem>
                <Divider />
            </List>
        </div>
    )
}

export default Lista
