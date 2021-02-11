import React from 'react'

import {Box, Divider, Grid, Typography} from '@material-ui/core'
import {borders} from '@material-ui/system'

const cajita = () => {
    return (
        <div>
            <Box
                bgcolor='primary.main'
                color='primary.contrastText'
            >
                Without
            </Box>
            <Box
                bgcolor='primary.main'
                color='primary.contrastText'
                m={2}
            >
                Margin
            </Box>
            <Box
                bgcolor='primary.main'
                color='primary.contrastText'
                m={2}
                p={2}
            >
                Margin and Padding
            </Box>
            <Box
                border={2}
                borderColor='primary.main'
                m={2}
                p={2}
            >
                Margin Padding and Border
            </Box>
            <Divider />
            <Grid container>

                <Grid item xs={12}>
                    <Box border={2} m={2} p={2} textAlign='center'>
                        xs 12
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box border={2} m={2} p={2} textAlign='center'>
                        xs 6
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box border={2} m={2} p={2} textAlign='center'>
                        xs 6
                    </Box>
                </Grid>

            </Grid>

            <Divider /> 
            <Box 
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='10rem'
                bgcolor='primary.main'
                color='common.white'
                m={1}
            >
                <Grid container>

                    <Grid item container xs={4}>

                        <Grid item xs={6}>
                            <Box 
                                border={2} 
                                borderRadius='borderRadius'
                                borderColor='background.paper' 
                                m={2} 
                                p={2} 
                                textAlign='center'>
                                <Typography>Box 1</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box 
                                border={2} 
                                borderRadius='borderRadius'
                                borderColor='background.paper' 
                                m={2} 
                                p={2} 
                                textAlign='center'>
                                <Typography>Box 2</Typography>
                            </Box>
                        </Grid>
                    
                    </Grid>  

                    <Grid item container xs={4}>

                        <Grid item xs={6}>
                            <Box 
                                border={2} 
                                borderRadius={16}
                                borderColor='background.paper' 
                                m={2} 
                                p={2} 
                                textAlign='center'>
                                <Typography>Box 3</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box 
                                border={2} 
                                borderRadius={16}
                                borderColor='background.paper' 
                                m={2} 
                                p={2} 
                                textAlign='center'>
                                <Typography>Box 4</Typography>
                            </Box>
                        </Grid>
                    
                    </Grid>  

                    <Grid item container xs={4}>

                        <Grid item xs={6}>
                            <Box 
                                border={2} 
                                borderRadius='50%'
                                borderColor='background.paper' 
                                m={2} 
                                p={2} 
                                textAlign='center'>
                                <Typography>Semi-Box 5</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                border={2} 
                                borderRadius='50%'
                                width='2rem'
                                height='2rem'
                                borderColor='background.paper' 
                                m={2} 
                                p={2} 
                                textAlign='center'
                            >
                                <Typography>o</Typography>
                            </Box>
                        </Grid>
                    
                    </Grid>                  

                </Grid>
            </Box>
        </div>
    )
}

export default cajita
