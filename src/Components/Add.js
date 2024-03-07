import React from 'react'
import { useState } from 'react'
import { Dialog,styled, TextField,Box, Typography,Button } from '@mui/material'
import { autheticate } from './Services/api'
import './Add.css'
const Component =styled(Box)`
    height: 100vh;
    width:1000px;
    margin:0px 50px 0px 0px;
    padding: 30px 0px 30px 40px;
    background-image: url(../Components/Images/arts.png);
    backgroundColor: 'transparent',
        boxShadow: 'none',
        fontFamily:'serif',

    
    `
 const Wrapper = styled(Box)`
 display: flex;
 flex-direction: column;
 backgroundColor:blue
    position:fixed
 `
 const signupInitialValues = {
  artist: '',
  title: '',
  bigtitle: '',
  price:'',
  types:'',
  Link1:'',
  Link2:''
 }
const Add = ({open,setOpen}) => {
    const handleclose = () => {
        setOpen(false)  
      }

    const [signUp, setSignup] = useState(signupInitialValues)

    const inputChng = (e) =>{
      setSignup({...signUp, [e.target.name]: e.target.value})
      }
    const submit = async () =>{
      const response = await autheticate(signUp);
      if(response!=null){
        alert("Data listed")
      }
    }
  return (
    <div>   
      <Dialog open={open} onClose={()=>{
        handleclose()
      }} PaperProps={{   
    style: {
      backgroundColor: ' #6dd5ed',
      boxShadow: 'none',
      display:'absolute',
      overflow:'hidden',
      fontFamily:'serif',
      fontSize:'15px'
    },
  }}>
      <h2 style={{ marginLeft:'30px',marginTop:'20px'}}>~Add Your Art Work</h2> 
        <Component>
        <Box> 
            <Wrapper justifyContent="center" > 
             <TextField variant='outlined' onChange={(e) => {inputChng(e)}} name='artist'   label="Enter the Artist Name"          style={{marginBottom:'10px',width:"500px"}}></TextField>
             <TextField variant='outlined' onChange={(e) => {inputChng(e)}} name='title'    label="Enter the Short Title for Art"  style={{marginBottom:'10px',width:"500px"}}></TextField>
             <TextField variant='outlined' onChange={(e) => {inputChng(e)}} name='bigtitle' label='Enter the Description'          style={{marginBottom:'10px',width:"500px"}}></TextField> 
             <TextField variant='outlined' onChange={(e) => {inputChng(e)}} name='price'    label='Enter your price'               style={{marginBottom:'10px',width:"500px"}}></TextField>
             <br/><Typography>Select the catogories of images - </Typography> 
               <select name="type" onChange={(e) => {inputChng(e)}} style={{width:'500px'}}>
              <option name='history'>History Painting</option>
              <option name='portrait'>Portrait</option>
              <option name='landscape'>Landscape </option>
              <option name='still'>StillLifePainting</option>
             </select><br/>
             <Typography>Enter two file images</Typography> 
             <sub>*Kindly Share Google Drive Links of images</sub> 
             <br/>
             <TextField variant='outlined' onChange={(e) => {inputChng(e)}} name='Link1' label='Image1' style={{marginBottom:'10px',width:"500px"}}></TextField>
             <TextField variant='outlined' onChange={(e) => {inputChng(e)}} name='Link2' label='Image2' style={{marginBottom:'10px',width:"500px"}}></TextField>
             <input type='button' value={'Submit'} onClick={() =>{submit()}}></input>
             </Wrapper>
        </Box>
        </Component>
      </Dialog>
    </div>
  )
}

export default Add
