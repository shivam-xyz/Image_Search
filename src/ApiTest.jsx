import { Container,  Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import makeStyles from '@mui/style';


// const useStyles = makeStyles(theme=>({
//   paper:{
//     marginTop:'100px'
//   },
//   container:{
//     marginTop:theme.spacing(10)
//   }
// }))


function ApiTest() {
   const [data,setData]= useState([])
   const [id, setId] = useState('')
  // const classes = useStyles()   
   useEffect( ()=>{
    axios.get(`https://tomestry.com/api/merchandise/${id}`)
    .then((res)=>{setData(res.data)})
    .catch((error)=>{console.log("unable to load")})},[])

   console.log(data)
  return (
    <div  >
    
    <label htmlFor="">Select Vendor ID :</label>
    <input onChange={(e)=>{setId(e.target.value)}} type="number" />
    <button  type="submit">{id}</button>
    
    <table style={{backgroundColor:'black',color:'yellow'}} border="2px solid red">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Mobile No.</th>
          <th>Mode</th>
          <th>PAN Number</th>
          <th>Rating</th>
          <th>Img Url</th>
          <th>Is_Open</th>
          <th>Balance</th>
        </tr>
    {/* {data.map((e)=>{return( */}
      
        <tr>
          <td>{data.id}</td>
          <td>{data.vendor}</td>
          <td>{data.phone_in_shop}</td>
          <td>{data.location}</td>
          <td>{data.pan}</td>
          <td>{data.rating_count}</td>
          <td> <img src={data.featured_photo} height="50px" width="100px" alt="Failed to Load"/> </td>
          <td>{data.is_open?'Open':'Close'}</td>
          <td>{data.balance}</td>
        </tr>

      



    {/* )})} */}
    </table>
      
      
    </div>
  )
}

export default ApiTest;