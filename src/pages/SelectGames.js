import React from 'react'
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

function SelectGames() {
  return (
    <>
        <h1>SelectGames</h1>
        <Button variant="contained" ><Link to="/pokemonnoirii">Pokemon Noir 2</Link></Button>
    </>
  )
}

export default SelectGames