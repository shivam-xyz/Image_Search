import { AddCircleOutline } from '@mui/icons-material';
import { Box, Container,  IconButton,  InputBase,  Paper, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';


const useStyles = makeStyles(theme=>({
  box:{
    marginTop:theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
    width:'100%'
    },
  },
  container_div:{
    display:'flex', 
    justifyContent:'center',
    alignItems:'center'
  },
  paper:{
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    minHeight:'80vh',
    [theme.breakpoints.up('sm')]:{
      width: '50vw', }
  },
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  items_icon:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
  },
  paper_div:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  inputbase_icon:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',
    color:'white'
  },
  typography_head:{
    backgroundColor: theme.palette.primary.main
  }
 
}))

const Counter = () => {
  const classes = useStyles()
  const [additem,setAddItem]= useState('')
  const [list, setList]= useState([])
  const addItemFun=()=>{
    setList((preValue)=>{return [...preValue , additem]});
    setAddItem('');

    
  };
  const fetchingFun=(event)=>{
    setAddItem(event.target.value)

  };

  return (
    <Box className={classes.box}>
    <div className={classes.container_div}>
      <Container  className={classes.container}>
        <div className={classes.paper_div}>
          <Paper  className={classes.paper} elevation={24} >
              <Typography align='center' className={classes.typography_head} variant='h4'>Task</Typography>
              
              <div className={classes.inputbase_icon}>
                <InputBase onChange={fetchingFun} value={additem} placeholder='Write Your Task'/>
                <IconButton onClick={addItemFun} size='large'>
                  <AddCircleOutline size='large'/>
                </IconButton>
              </div>
              <hr />

              {list.map((ele,index)=>{return(<div key={index} className={classes.items_icon}>
                <DeleteIcon onClick={()=>{setList((prLst)=>{return prLst.filter((el,ind)=>{return index !== ind })})}} />
                <Typography variant='body2'>
                  {ele}
                </Typography>
              </div>
)})}

              
          </Paper>
          </div>
        
      </Container>
      </div>
    </Box>
  )
}

export default Counter











































// import React from 'react'
// import './App.css';
// import {makeStyles} from '@mui/styles'
// import { Container, IconButton, Paper, Typography } from '@mui/material';
// import { width } from '@mui/system';
// import InputBase from '@mui/material/InputBase';
// import AddIcon from '@mui/icons-material/Add';
// import CheckIcon from '@mui/icons-material/Check';
// import { useState } from 'react';


// const useStyles = makeStyles(theme=>({
//     typo:{
//       backgroundColor:theme.palette.secondary.main,
//       color:'yellow',
      
//     },
//     paper:{
//       marginTop: theme.spacing(5) ,
//       border:'2px solid red',
//       [theme.breakpoints.down('sm')]:{
//         width:'100%',
//         minHeight:'60vh'

//       },
//       [theme.breakpoints.up('sm')]:{
//         width:'40%',
//         minHeight:'80vh',
        

//       }
//     },
//     container:{
//       display:'flex',
//       justifyContent:'center',
//       alignItems:'center',
      
      
//     },
//     inputbase:{
//       backgroundColor:'pink',
//       display:'flex',
//       justifyContent:'center',
//       alignItems:'center',
//       height:theme.spacing(6)
//     },
//     iconPlus:{
//       display:'flex',
//       justifyContent:'center',
//       alignItems:'center'
//     },
//     plus:{
//       fontSize: '40px'
//     },
//     paperDiv:{
//       display:'flex',
//       justifyContent:'center',
//       alignItems:'center'
//     },
//     item:{
//       display:'flex',
//       justifyContent:'center',
//       alignItems:'center',
//     },
//     completed:{
//       marginRight: theme.spacing(1) ,
//     },
//     itemButton:{
//       display:'flex',
//       justifyContent:'center',
//       alignItems:'center'
//     }
//   }))

// const Counter = () => {
//   const classes = useStyles();
//   const [open, setOpen]= useState(false);
//   const [item, setItem]= useState('')
//   const [data, setData]= useState([]);


  


//   const iBfun=(e)=>{
//     let get = e.target.value;
//     setItem(get)
//   };

//   const getData=()=>{
//     setData((preList)=>{
//       return [...preList , item]
//   });
//     setItem("")
    

//   }

  
  
//   return (
//     <Container className={classes.container}>
//     <div className={classes.paperDiv}>
//         <Paper className={classes.paper}>
//           <Typography variant='h4' align='center' className={classes.typo}>
//             My Task
//           </Typography>
//           <div className={classes.iconPlus}>
//             <InputBase value={item} onChange={iBfun} className={classes.inputbase}/>
//             <AddIcon onClick={getData} className={classes.plus}/>
//           </div>
//           <hr />

//           {data.map((element,index)=>
//             <div key={index}  className={classes.itemButton}>
//               <IconButton  onClick={()=>{setData((preList)=>{return preList.filter((ele,ind)=>{ return index!==ind}) })}}>
//                 <CheckIcon  className={classes.completed}/>
//               </IconButton>
              
//               <Typography className={classes.item}>{element}</Typography>
              
//             </div>
          
//           )
//           }
          

          
//         </Paper>
//     </div>
//     </Container>
//   )}

// export default Counter

























// import { display } from '@mui/system';
// import React, {useState} from 'react';
// import './App.css';

// function Counter(){
//     const [pass , setPass] = useState("")
//     const [uname , setUname] = useState("")

//     const showPass=(e)=>{
//         let p = e.target.value
//         setPass(p)
//         console.log(p.length)
//     }

//     const showUserName =(e)=>{
//         let pp = e.target.value
//         setUname(pp)
//     }

//     return(
//         <>
//             <form>
//                 <div className="head-data">
//                     <strong>LogIn Form</strong>
//                 </div>
//                     <br />
//                 <div className='if'>
//                     <div>
//                         <label htmlFor="">Username : 
//                             <input value={uname} onChange={showUserName} type="text" />
//                         </label>

//                         <br />

//                         <label htmlFor="">Password :  
//                             <input value={pass} onChange={showPass} type="password" />
//                         </label>

//                         <br />

//                         <small>{(pass.length>0)? (<>show password : {pass}</>): "" }  </small>
//                     </div>
//                 </div>
                
//             </form>
//             <div className="btn">
//                 <button >Login</button>
//             </div>
//             <div className="if">
//                 {(uname.length>0 || pass.length>0 )? (<><small>UserName: {uname} , Password: {pass}</small></>) : "" }
                
//             </div>

//         </>
//     )
// }

// export default Counter




















// import React, { useState } from 'react';
// import './App.css';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import PropTypes from 'prop-types'


// const Counter = (props) => {

//   const [res, setRes] = useState(0)

//   const increase =()=>
//   {
//     setRes(res + 1 )
//   }

//   const decrease =()=>{
//     if (res>0){
//     setRes(res - 1)
//     }
//     else
//     {
//     setRes(0)
//     alert('You can not go below Zero')
//     }
//   }
  
//   return (
//     <>
//       <div className="App-header">
//       <h3>Hello, {props.username}</h3>
//       <h6>Age - {props.age}</h6>
//          <div className="child1">
//            <div className="countingResult">{res}</div>
//            <hr />
//            <div className="buttons">
//              <button onClick={increase} className="positiveButton"><AddIcon/></button>
//              <button onClick={decrease} className="negativeButton">{res>=2?<RemoveIcon/>:<DeleteIcon/>}</button>
//            </div>
//          </div>
//        </div>
//     </>
//   )
// }

// Counter.propTypes={
//     username : PropTypes.string,
//     age : PropTypes.number
// }
// Counter.defaultProps ={
//     username: 'U/N n/a',
//     age: 'Age n/a'
// }

// export default Counter















// import './App.css';
// import React from 'react';

// class App extends React.Component{
//   constructor(){
//     super()
//     Number(this.state ={
//       count : Number(0)
//     })
//     Number(this.increase = this.increase.bind(this))
//     Number(this.decrease = this.decrease.bind(this))
//   }




//   increase=(preState)=>{
//    this.setState({count : Number(preState.count) + Number(1)});
   
//   }


//   decrease=(preState)=>{
//    this.setState({count : Number(preState.count) - Number(1)});
//   }


  
//   render(){
//   return (
//     <>
//       <div className="App-header">
//         <div className="child1">
//           <div className="countingResult">{Number(this.state.count)}</div>
//           <hr />
//           <div className="buttons">
//             <button onClick={this.increase} className="positiveButton">Increase</button>
//             <button onClick={this.decrease} className="negativeButton">Decrease</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// }

// export default App;
