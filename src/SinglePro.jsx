import { CardMedia, Grid, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(theme=>({
    child:{
        border:'2px solid white',
        height: '350px',
        marginRight:theme.spacing(2),
        marginBottom:theme.spacing(2),
        marginLeft:theme.spacing(1),

    },
    imageDiv:{
        height:'270px',
        // width:"200px",
        // display:'flex',
        // justifyContent:'center',
    },
    info:{
        display:'flex',
        justifyContent:'space-between',
        paddingLeft:theme.spacing(1),
        paddingRight:theme.spacing(1),
        marginTop:theme.spacing(1),
        marginBottom:theme.spacing(1)
    },
    btn:{
        display:'flex',
        justifyContent:"space-around",
        alignItems:'center'
    },
    cardmedia:{
        height:'280px'
    },
    name:{
        fontWeight:'bold'
    },
    price:{
        fontWeight:'bold',
        color:'red'

    }

}))

function SinglePro({pr,cart,setCart}) {
    const classes = useStyles()
    console.log(pr)
    console.log(cart)
  return (
    <>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={24} className={classes.child}>
            <div className={classes.imageDiv}>
                <CardMedia image={pr.image} className={classes.cardmedia} alt={pr.name} />
            </div>
            <div className={classes.info}>
                <div className={classes.name}>{pr.name}</div>
                <div className={classes.price}>Rs. {pr.price}</div>
            </div>
            <div className={classes.btn}>
                {cart.includes(pr)
                ?
                (<button onClick={()=>{setCart(cart.filter(c=>c.id!==pr.id))}}>Remove</button>)
                :
                (<button onClick={()=>{setCart([...cart,pr])}}>Add</button>)}
                
                
            </div>
        </Paper>
        </Grid>

    </>
  )
}

export default SinglePro