import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function footer() {
  return (
    <>
      <Box sx={{
          color:'white',
          bgcolor:'primary.main',
          boxShadow: 6,
          p: '25px',
          mt:'40px'
        }}>
        <Typography variant='h5' >Pages</Typography>
        <Typography >Accueil</Typography>
        <Typography >Communauté</Typography>
        <Typography >Blog</Typography>
        <Typography variant='h5'>A propos</Typography>
        <Typography >Qui sommes nous</Typography>
        <Typography >FAQ</Typography>
        <Typography variant='h5' >Informations</Typography>
        <Typography >Mention légales</Typography>
        <Typography >C.G.U</Typography>
        <Typography >C.G.V</Typography>
        <Typography variant='h5' >Réseaux sociaux</Typography>
      </Box>
    </>
  )
}

export default footer