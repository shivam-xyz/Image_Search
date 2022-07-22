import React from 'react';
import {makeStyles} from '@mui/styles';
import { Box, Container, Paper } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from './QuestionApi';
import { useState } from 'react';

const useStyles = makeStyles(theme =>({
  accordion_details:{
    backgroundColor: 'red',
    textAlign:'center',
    
  },
  accordion:{
    marginBottom: theme.spacing(2),
    marginTop:theme.spacing(2)
  },
  
  summary:{
    marginTop: theme.spacing(5) ,
    backgroundColor: 'red',
  }

}));

const Dark = (props) => {
  const [ques, setQues]= useState([])
  const classes = useStyles()
  const [expend, setExpend]= useState(false)
  
  const expendHandler=()=>{
    if(expend=== false){
      setExpend(true)
    }
    else if(expend=== true){
      setExpend(false)
    }
  }

  data.filter((ele)=> setQues(ele))
  console.log(ques)
 
    

  return (




    <>


    
    
    <div className={classes.div}>
    <Container>
    
    
      
      <Accordion onClick={expendHandler} expanded={props.isopen?expend : false} className={classes.accordion} disabled={(props.isopen?false:true)} >
        <AccordionSummary className={classes.summary} expandIcon={<ExpandMoreIcon />}> <strong> {`Q.${props.id}: `}</strong> {props.question} {props.isopen?"": "Out of Stock"}</AccordionSummary>
        <Paper>
        <hr />
        <AccordionDetails className={classes.accordion_details}>{`Ans :${props.answer}`}</AccordionDetails>
        </Paper>
      </Accordion>
      </Container>
      
    </div>
    </>
  )

}

export default Dark