import React from 'react'
import { Dialog,styled, TextField,Box, Typography,Button } from '@mui/material'
import './Add.css'


const Component =styled(Box)`
    height: 70vh;
    width:500px;
    margin:0px 50px 0px 0px;
    padding: 30px 0px 30px 40px;
    background-image: url(../Components/Images/arts.png);
    backgroundColor: 'transparent',
        boxShadow: 'none',
    
    `
 const Wrapper = styled(Box)`
 display: flex;
 flex-direction: column;
 backgroundColor:blue
    position:fixed
 `
const div= styled(Dialog)
const Add = ({open,setOpen}) => {
    const handleclose = () => {
        setOpen(false)
      }
  return (
    <div>
        
      <Dialog open={open} onClose={handleclose} PaperProps={{
    style: {
      backgroundColor: '#E27D60',
      boxShadow: 'none',
    },
  }}>
      <h2 style={{marginTop:'20px', marginLeft:'30px'}}>~Add Your Art Work</h2> 
        <Component>
        <Box> 
            <Wrapper justifyContent="center" > 
             <TextField variant='outlined' label="Enter the Artist Name" style={{marginBottom:'10px'}}></TextField>
             <TextField variant='outlined' label="Enter the Short Title for Art"  style={{marginBottom:'10px'}}></TextField>
             <TextField variant='outlined' label='Enter the Description'  style={{marginBottom:'10px'}}></TextField> 
             <TextField variant='outlined' label='Enter your price'  style={{marginBottom:'10px'}}></TextField>
             <Typography>Enter two file images</Typography>  
             <input class='form-control-sm' type='file'></input> 
             <input class='form-control-sm' type='file'></input>
             <input type='button' value={'Submit'}></input>
             </Wrapper>
        </Box>
        </Component>

      </Dialog>
    </div>
  )
}

export default Add
