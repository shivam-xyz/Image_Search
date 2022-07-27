import { makeStyles } from '@mui/styles'
import React from 'react'
import SinglePro from './SinglePro';
import products from './ProductApi';
import { useState } from 'react';
import { Grid } from '@mui/material';

const useStyles = makeStyles(theme=>({
    container:{
        display:'flex',
        justifyContent:'center',
        // alignItems:'center',
        // flexWrap:'wrap',
        marginTop:theme.spacing(10)
    },
    card:{
      display:'flex',
      justifyContent:'center'
    }
}))

function Home({cart,setCart}) {
    
    const [productArray]=useState(products)
    const classes = useStyles()
    // console.log(productArray)
  return (
    <div className={classes.container}>
    <Grid container className={classes.card}>
        {productArray.map((pr)=><SinglePro pr={pr} cart={cart} setCart={setCart} />)}
    </Grid>
    </div>
  )
}

export default Home