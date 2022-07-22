import {Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme=>({
    container:{
        marginTop:theme.spacing(2),
        
    },
    griditem:{
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.up('sm')]:{
            display:'flex',
            justifyContent:'center'
        }
    },
    mainDiv:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        float:'left',
        border: '2px solid black'
        
    }



}))

const Items = (props) => {
    const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
        <Grid className={classes.gridcontainer} container>
            <Grid className={classes.item} sm={3} xs={6} item>
                <Container className={classes.container}>
                <Paper className={classes.paper} elevation={20} >
                    <Typography>{props.data}</Typography>
                </Paper>
                </Container>
            </Grid>   
        </Grid>
    </div>
  )
}

export default Items