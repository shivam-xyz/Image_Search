import React from 'react'
import { useState } from 'react'
import Result_Image from './Result_Image'

const SearchImage = () => {
    const [ip, setIp]= useState('')
    const styles ={
        maindiv:{
            
            marginTop:'50px',
            display:'flex',
            justifyContent:'center',
        },
        imgDiv:{
            display:'flex',
            justifyContent:'center'
        }
    }
    const changeHandler=(event)=>{
        let get = event.target.value
        setIp(get)

    }
    
  return (
    <div>
        <div style={styles.maindiv} className="mainDiv">
        <label htmlFor="">Search Images : </label>
            <input onChange={changeHandler} type="text" />
        </div>
        <div style={styles.imgDiv} className="image">
        <Result_Image data={ip} />
        </div>
    </div>
  )
}

export default SearchImage