import React from "react";
import GameForm from "../ressouces/gameForm";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function AddGame() {
  return (
    <>
      <Box sx={{
          color:'white',
          bgcolor:'primary.main',
          boxShadow: 6,
          p: '25px',
          textAlign: 'left',
      }}>
      <Typography variant="megaTitle">Ajouter un Jeu</Typography>
      </Box>
      <Box sx={{pl:'20px', pt:'20px'}}>
        <GameForm />
      </Box>
    </>
  );
}