import React from 'react'
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GameName from "../ressouces/gameName";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function PokemonNoireII() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="white" href="/" onClick={handleClick}>
      Accueil
    </Link>,
    <Typography key="3" color="white">
      Pokemon
    </Typography>,
  ];
  return (
    <>
      <Box sx={{
          color:'white',
          bgcolor:'primary.main',
          boxShadow: 6,
          p: '25px',
        }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
        <Typography variant="megaTitle">Pokemon version Noire 2</Typography>
      </Box>
      <Box sx={{
          p: '25px',
        }}>
      <GameName />
      <Button variant="contained" ><Link to="/message">Envoyer un message</Link></Button>
      </Box>
    </>
  )
}

export default PokemonNoireII