import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect } from 'react';
import { useState } from 'react';

const useStyles = makeStyles(theme=>({
    headerMain:{
        display:'flex',
        justifyContent:'space-around',
        color:'white',
        backgroundColor:'black',
        borderBottom:'white',
    },
    typo:{
        color:'yellow'
    }
}))


function Header({cart,setCart}) {
    
    const classes = useStyles()
    const [num, setNum] = useState(cart.length)
    useEffect(()=>{
        setNum(cart.length)
    })
    document.title= `${num} items in Cart`
  return (
    <AppBar>
        <Toolbar className={classes.headerMain}>
        <Typography className={classes.typo}>
            <Link className={classes.typo} to='/'>Home</Link>
        </Typography>
        <Typography className={classes.typo} >
            <Link className={classes.typo} to="/cart">Cart</Link>
        </Typography>
        <IconButton>
            <Badge badgeContent={num} color="primary">
                <ShoppingCartIcon className={classes.typo}/>
            </Badge>
        </IconButton>

        </Toolbar>
    </AppBar>
  )
}

export default Header