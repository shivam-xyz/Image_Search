import React from 'react';
import { AppBar, Box, Container, Paper, Toolbar, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Items from './Items';
import { useState } from 'react';


const useStyles = makeStyles((theme)=>({
  box_main:{
    marginTop: theme.spacing(10),
    width:'100vw'
  },
  appbar:{
    backgroundColor:'yellow',
    color:'black'
  },
  paper_main:{
    width:'80%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.up('sm')]:{
      width:'30%'
    },
    height:theme.spacing(20)
  },
  container_mainCard:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },


}))


function Profile() {
  const [raw,setRaw] = useState('');
  const [list ,setList] = useState([]);
  const classes = useStyles();
  const changeInputHandler =(event)=>{
    setRaw(event.target.value)
  };
  const addButton=()=>{setList((oldList)=>{return [...oldList,raw];
  
  })
  setRaw('')
};
  return (
    <div>
    {/* AppBar Starts */}
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography
          variant='h4'
          >
            My Task
          </Typography>
        </Toolbar>
      </AppBar>
      {/* App Bar Ends */}
      {/* Main Card Starts */}
      <Box className={classes.box_main}>
      
        <div className={classes.container_mainCard}>
        
          <Paper elevation={5} className={classes.paper_main} >
            <TextField value={raw} onChange={changeInputHandler} label="Write Your Task"/>
            <AddCircleOutlineRoundedIcon onClick={addButton} />
          </Paper>
        </div>
    
        
      </Box>
      {/* Main Card Ends */}
      {list.map((element,index)=>{return <Items value={raw} key={index} data={element} />})}
      
    </div>
  )
}

export default Profile

































// import {AppBar ,Box,Container,TextField, Paper,Toolbar,Typography, Button} from '@mui/material';

// import { makeStyles } from '@mui/styles';
// import { display } from '@mui/system';
// import { useState } from 'react';
// import Switch from '@mui/material/Switch';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';






// const useStyles = makeStyles(theme=>({
//   appbar_text_dark:{
//     display:'flex',
//     justifyContent:'center',
//     color: 'yellow',
//     alignItems:'center',
//     backgroundColor: 'black',
//   },
//   appbar_text_light:{
//     display:'flex',
//     justifyContent:'center',
//     color: theme.palette.secondary.main,
//     alignItems:'center',
//   },
//   main_container:{
//     // backgroundColor:'black',
//     // width:'100vw',
//     // height:'100vh'
//   },



//   box_light:{
//     // marginTop: theme.spacing(15),
//     backgroundColor:"white",
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     width:'100vw',
//     height:'100vh'
    
//   },
//   box_dark:{
//     // marginTop: theme.spacing(15),
//    backgroundColor:"black",
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     width:'100vw',
//     height:'100vh'
    
//   },
//   paper:{
//     display:'flex',
    
//     justifyContent:'center',
//     alignItems:'center',
//     flexDirection:'column',
//     marginTop: theme.spacing(0),
//     paddingBottom: theme.spacing(4) ,
//     [theme.breakpoints.up('sm')]:{
//       width:'50vw'
//     },
//     // backgroundColor: theme.palette.primary.main
//   },
//   login_btn:{
//     marginTop: theme.spacing(2),
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   subheading:{
//     marginBottom:theme.spacing(3)
//   },
//   desktop:{
//     display:'none',
//     [theme.breakpoints.up('sm')]:{
//       display: 'block'
//     }
//   },
//   phone:{
//     display:'block',
//     [theme.breakpoints.up('sm')]:{
//       display:'none'
//     }
//   },
//   container:{
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'red'
//   },
//   // mob:{                    //not working
//   //   textAlign:'center',
//   //   display:'flex',
//   //   justifyContent:'center',
//   //   alignItems:'center'
//   // }

// }))


// const Profile = () => {
//   const [open , setOpen]= useState(false);
//   const classes = useStyles({open});
//   const [password , setPassword] = useState("");
//   const password_handler =(event)=>{
//     let get = event.target.value
//     setPassword(get)
//   };
//   const modeChanger =()=>{
//     if(open===true){
//     setOpen(false)
//     }
//     else if(open===false){
//       setOpen(true)
//     }
//   };
//   return(
//     <>
//         <AppBar>
//         <Toolbar className={open?classes.appbar_text_dark:classes.appbar_text_light}>
//             <Typography className={classes.desktop} variant='h4'> <strong>Log In Desktop</strong> </Typography>
//             <Typography className={classes.phone} variant='h4'> <strong>Log In Phone</strong> </Typography>
//         </Toolbar>
//         </AppBar>
//         <div >
//         <div>
          
//         </div>
//           <Box className={open?classes.box_dark:classes.box_light}>
          
            
//             <div>
            
//               <Paper elevation={5} className={classes.paper}>
//               <Switch onClick={modeChanger}  label='Baby' /><small>{open?'Dark Mode':'Light Mode'}</small>
//               <div className={classes.subheading}>
//                 <Typography  variant='h5'> <strong>Your Credentials</strong></Typography>
//                 </div>
//                 <form>
//                 <TextField className={classes.mob} label="Mobile Number"/>
//                 <br />
//                 <hr />
//                 <TextField onChange={password_handler} type='password'  label="Password"/>
//                 {(password.length>0)?(<Typography ><small>show : <strong>{password}</strong> </small></Typography>):''}
                
//                 <div className={classes.login_btn} >
//                   <Button  variant='contained'>Log In</Button>
//                 </div>
//                 </form>
//               </Paper>
//               </div>
            
//           </Box>
//         </div>
//      </>
//   )
// }

// export default Profile;