import React from 'react'
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Message() {
  return (
    <>
      <Box sx={{
          color:'white',
          bgcolor:'primary.main',
          boxShadow: 6,
          p: '25px',
          textAlign: 'center',
        }}>
        <Typography sx={{color:'white', fontSize:'16px', fontFamily:'Poppins'}}><ArrowBackIcon />Envoyer un message</Typography>
      </Box>
        <Button variant="contained"><Link to="/">Retour ala casa</Link></Button>
    </>
  )
}

export default Message