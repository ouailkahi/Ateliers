import React, { useState } from 'react';

export default function JeuDe({ cache }) {
    const [compteur, setcompteur] = useState(0);
    const [face, setFace] = useState(null);
    const [fin, setFin] = useState(false);

    function jouer() {
        const v = Math.floor(Math.random() * 6 + 1);
        setcompteur(compteur + 1);
        setFace(v);
        v === cache && setFin(true);
    }

    const initialiser = () => {
        setcompteur(0);
        setFace(null);
        setFin(false);
    }

    return (
        <div>
            <img src="/images/face1.jpeg" />
            <h1>Jeu De dé</h1>
            <h3>face {face}</h3>
            <img src={face== null ?`images/facevide.jpeg` :  `/images/face${face}.jpeg`} />
            <p>Nombre d essais :{compteur}</p>
            {fin ? <div>
                <p>mealemm</p>
                <button onClick={initialiser}>Initialiser</button></div> :
                <button onClick={jouer}>jouer</button>}
        </div>
    )

}
