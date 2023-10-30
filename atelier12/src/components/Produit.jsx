import React from 'react';
import './Produitstyle.css'; 

const Produit = (props) => {
    return (
        <div className="produit-container"> 
            <img src={props.produit.images[0]} alt={props.produit.title} />
            <h1>{props.produit.title}</h1>
            <p>{props.produit.description}</p>
            <h3>Prix : {props.produit.price} DH</h3>
            <button>Ajouter au panier</button>
        </div>
    );
}

export default Produit;
