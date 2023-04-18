import React from "react";
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
import talesofversperia from "../img/talesofvesperia.jpg";
import hogwarts from "../img/hogwarts.png";
import grosbutton from "../img/mainbutton.svg";
import Footer from "../ressouces/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};

export default function Home() {

  return(
    <div className="mainContainer">
      <Box sx={{
          color:'white',
          bgcolor:'primary.main',
          boxShadow: 6,
          p: '25px',
          pt: '35px',
          textAlign: 'left',
        }}>
          <>
            <Typography variant="megaTitle">Une communauté d’acheteurs et vendeurs de jeux vidéos :</Typography>
          </>
          <>
            <Typography><CheckCircleIcon />Discute avec des passionnés</Typography>
          </>
          <>
            <Typography><CheckCircleIcon />Achète et vend en toute confiance</Typography>
          </>
          <>
            <Typography><CheckCircleIcon />0 commission à la vente et à l’achat </Typography>
          </>
          <>
            <Typography><CheckCircleIcon />Ne rate plus une opportunités d’achat </Typography>
          </>
        <Typography ><img src={grosbutton} alt='logo'/></Typography>
      </Box>
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


      <Grid   container
              direction="row"
              justifyContent="space-between"
              alignItems="center" 
              padding='10px'>
        <Grid item xs={6} >
          <Typography variant="title">Nouveautés</Typography>
        </Grid>
        <Grid item xs={6} sx={{textAlign: 'right'}} >
          <Typography variant="subtitle2">Voir plus</Typography>
        </Grid>
      </Grid>
      <Box sx={{ m:'10px' }} >
      <Slider {...settings}>
        <Card m='10px' sx={{ maxWidth: 150 }} >
          <CardActionArea component='a' href="/pokemonnoirii">
            <CardMedia
              component="img"
              height="120"
              image={sonic}
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
              image={talesofversperia}
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
              image={pkmnoiriixs}
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
              image={pkmnoiriixs}
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

      <Footer />
    </div>
  )
}