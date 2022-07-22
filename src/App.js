import React from 'react';

import Dark from './Dark'

import theme from './theme';
import Profile from './Profile';
import {ThemeProvider} from '@mui/material/styles';
import data from './QuestionApi';
import Counter from './Counter';
import Items from './Items';
import { Grid } from '@mui/material';
import ApiTest from './ApiTest';
import SearchImage from './SearchImage';

const dis = data.map((ele)=>{return(
  <Dark key={ele.id} id={ele.id} question={ele.question} answer={ele.answer} isopen={ele.isopen}   />
)})


function App() {
  return (
    
      <ThemeProvider theme={theme}>
        {/* <Profile/> */}
        {/* <ApiTest/> */}
        <SearchImage/>
        
        {/* {dis} */}
        {/* <Counter/> */}

      </ThemeProvider>
    
  )
}

export default App