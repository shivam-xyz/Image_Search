import React from 'react';
import './App.css';
import {makeStyles} from '@mui/material/styles'

const useStyles = makeStyles({

})

const NavBar = () => {

  return (
    <>
        <div className="maindiv">
            <div className="home">
            <a href=""> Home </a>
            </div>
            <div className="counter">
            <a href="/"> Counter </a>
            </div>
            <div className="dart">
            <a href="https://www.google.com"> Dart</a>
            </div>
            <div className="profile">
            <a href=""> Profile</a>
            </div>
        </div>
    </>
  )
}

export default NavBar