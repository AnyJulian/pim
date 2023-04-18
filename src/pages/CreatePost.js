import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import pkmrubis from "../img/pkmrubis.jpg";
import pkmnoiriixs from "../img/pkmnoiriixs.jpg";
import kirby from "../img/kirby.jpg";
import sonic from "../img/sonic.jpg";
import hogwarts from "../img/hogwarts.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { db } from "../firebase-config";
import { doc, onSnapshot } from "firebase/firestore";

const merde = [{jeuId:'1', name:'Pokemon', prix:'56.42€', img:pkmrubis},{jeuId:'2', name:'Sonic', prix:'3.00€', img:sonic}]

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};

function CreatePost() {
  
  const [gameSonic, setGameSonic] = useState(null);
  const [gamePoke, setGamePoke] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "games", "Sonic"), (doc) => {
      setGameSonic({ id: doc.id, ...doc.data() });
    });

    return () => {
      unsubscribe();
    };
  }, []);
  
   useEffect(() => {
     const unsubscribe = onSnapshot(doc(db, "games", "Poke"), (doc) => {
       setGamePoke({ id: doc.id, ...doc.data() });
     });

     return () => {
       unsubscribe();
     };
   }, []);

  if (!gameSonic) {
    return <div>Loading...</div>;
  }
   if (!gamePoke) {
     return <div>Loading...</div>;
  }

  return (
    <>
      <>
      <Grid   container
      direction="row"
      justifyContent="space-between"
      alignItems="center" 
      padding='10px'
      sx={{ pl:"10px", pt:"30px" }}
      >
        <Grid item xs={6} >
          <Typography variant="title">Populaires</Typography>
        </Grid>
        <Grid item xs={6} sx={{textAlign: 'right'}} >
          <Typography variant="subtitle2">Voir plus</Typography>
        </Grid>
      </Grid>
      <Box sx={{ m:'10px' }} >


      <Slider className="sliderTest" {...settings}>
        <Card m='10px' sx={{ maxWidth: 150 }} >
          <CardActionArea component='a' href="/pokemonnoirii">
            <CardMedia
              component="img"
              height="120"
              image={pkmnoiriixs}
              alt="jeu"
              sx={{ pt:'5px', pl:'5px', pr:'5px',borderRadius:'15px' }}
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{gamePoke.name}</Typography>
              <Typography variant="body2" color="text.secondary">76.90€</Typography>
            </CardContent>
          </CardActionArea>
        </Card> 
        <Card m='10px' sx={{ maxWidth: 150 }} >
          <CardActionArea component='a' href="/pokemonnoirii">
            <CardMedia
              component="img"
              height="120"
              image={pkmrubis}
              alt="jeu"
              sx={{ pt:'5px', pl:'5px', pr:'5px',borderRadius:'15px' }}
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Pokemon Version Rubis</Typography>
              <Typography variant="body2" color="text.secondary">10.80€</Typography>
            </CardContent>
          </CardActionArea>
        </Card> 
        <Card m='10px' sx={{ maxWidth: 150 }} >
          <CardActionArea component='a' href="/pokemonnoirii">
            <CardMedia
              component="img"
              height="120"
              image={kirby}
              alt="jeu"
              sx={{ pt:'5px', pl:'5px', pr:'5px',borderRadius:'15px' }}
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Pokemon Noir II</Typography>
              <Typography variant="body2" color="text.secondary">76.90€</Typography>
            </CardContent>
          </CardActionArea>
        </Card> 
        <Card m='10px' sx={{ maxWidth: 150 }} >
          <CardActionArea component='a' href="/pokemonnoirii">
            <CardMedia
              component="img"
              height="120"
              image={hogwarts}
              alt="jeu"
              sx={{ pt:'5px', pl:'5px', pr:'5px',borderRadius:'15px' }}
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Pokemon Noir II</Typography>
              <Typography variant="body2" color="text.secondary">76.90€</Typography>
            </CardContent>
          </CardActionArea>
        </Card> 
      </Slider>
    </Box>
    </>

      <Slider className="sliderTest" {...settings}>
        {merde.map((jeu) => (
          <Card key={jeu.jeuId} m='10px' sx={{ maxWidth: 150 }} >
            <CardActionArea component='a' href="/pokemonnoirii">
              <CardMedia
                component="img"
                height="120"
                image={jeu.img}
                alt="jeu"
                sx={{ pt:'5px', pl:'5px', pr:'5px',borderRadius:'15px' }}
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">{jeu.name}</Typography>
                <Typography gutterBottom variant="subtitle1" component="div">{jeu.poster}</Typography>
                <Typography gutterBottom variant="subtitle2" component="div">PRIX</Typography>
                <Typography variant="body2" color="text.secondary">{jeu.prix}</Typography>
              </CardContent>
            </CardActionArea> 
          </Card>
        ))}

      </Slider>
      <Typography></Typography>
    </>
  )
}

export default CreatePost