import React, { useState, useEffect } from 'react';
import { db } from "../firebase-config";
import { doc, onSnapshot } from "firebase/firestore";

function GameName() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "games", "Pokemon Noir II"), (doc) => {
      setGame({ id: doc.id, ...doc.data() });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {game.image && <img src={game.image} alt='img'/>}
      <h2>{game.name}</h2>
      <p>Date de sortie : {game.date}</p>
      <p>{game.price}€</p>
      <p>{game.rating}</p>
      <p>État du jeu : {game.condition}</p>
      <p>{game.description}</p>
      <p>{console.log(game)}</p>
    </div>
  );
}

export default GameName;
