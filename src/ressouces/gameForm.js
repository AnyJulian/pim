import React, { useState } from "react";
import { TextField, Button, Grid, Typography, RadioGroup, Radio, FormControlLabel } from "@mui/material";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Rating } from "@mui/material";
import { db } from "../firebase-config";
import { doc, setDoc } from "firebase/firestore"; 

const GameForm = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [dossier, setDossier] = useState("populaire");
    const [price, setPrice] = useState(0);
    // const [releaseDate, setReleaseDate] = useState(null);
    const [rating, setRating] = useState(0);
    const [condition, setCondition] = useState("new");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setDoc(doc(db, "games", name), {
        name: name,
        date: date,
        dossier: dossier,
        price: price,
        // releaseDate: releaseDate,
        rating: rating,
        condition: condition,
        description: description,
        image: image,
      })
      .then(() => {
        console.log("Document successfully written!");
        setName("");
        setDate("");
        setDossier("populaire");
        setPrice(0);
        // setReleaseDate(null);
        setRating(0);
        setCondition("new");
        setDescription("");
        setImage("")
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    };

    const handleImage = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (event) => setImage(event.target.result));
      reader.readAsDataURL(file);
    };

    return (
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h5">Add a Game</Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Dossier"
              value={dossier}
              onChange={(event) => setDossier(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Price"
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </Grid>
          {/* <Grid item>
            <DatePicker
              label="Release Date"
              value={releaseDate}
              onChange={(value) => setReleaseDate(value)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid> */}
          <Grid item>
            <Rating
              name="rating"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              max={5}
            />
          </Grid>
          <Grid item>
            <RadioGroup
              aria-label="Condition"
              name="condition"
              value={condition}
              onChange={(event) => setCondition(event.target.value)}
            >
              <FormControlLabel value="new" control={<Radio />} label="New" />
              <FormControlLabel value="used" control={<Radio />} label="Used" />
            </RadioGroup>
          </Grid>
          <Grid item>
            <TextField
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Grid>
          <input name="image" type="file" onChange={handleImage} />
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Add Game
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  };
  
  export default GameForm;