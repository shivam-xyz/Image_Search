import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SinglePro from './SinglePro'

const useStyles = makeStyles(theme=>({
  mainDiv:{
    marginTop:theme.spacing(10)
  },
  myCart:{
    fontSize:20,
  },
  total:{
    fontSize:20,
  },
  display:{},
  showCart:{
    // display:'flex',
    // justifyContent:'space-between',
    
  },
  card:{
      display:'flex',
      justifyContent:'center'
    },
    headData:{
      textAlign:'center',
      color:'white'
    }
}))

function Cart({cart,setCart}) {
  const classes = useStyles()
  const [total,setTotal] = useState()
  useEffect(()=>{
    setTotal(
    cart.reduce((acc,el)=>acc = acc + Number(el.price),0))
  })
  return (
    <div className={classes.mainDiv}>
      <div className={classes.headData}>
        <span className={classes.myCart}>My Cart</span>
        <br />
        <span className={classes.total}>Total: {total} Rs.</span>
      </div>
      <br />
      <br />
        <div className={classes.showCart}>
        <Grid container className={classes.card}>
          {cart.map((pr)=>(<SinglePro pr={pr} cart={cart} setCart={setCart} />))}
        </Grid>
        </div>
    </div>
  )
}

export default Cart