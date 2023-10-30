import React, { useEffect, useState } from "react";
import Produit from "./Produit";
import axios from 'axios';
import './ListProduitsstyle.css'; 

const ListProduits = () => {
  const [categories, setCategories] = useState([]);
  const [categorie, setCategorie] = useState(0);
  const [produits, setProduits] = useState([])

  useEffect(()=>{
    const getData = async () => {
        const res = await axios.get('https://api.escuelajs.co/api/v1/categories');
        return res.data;
    }

    getData().then(cats => setCategories(cats));
  }, []);

  useEffect(() => {
    const getData = async () => {
        let api = ''
        if(categorie == 0)
            api = 'https://api.escuelajs.co/api/v1/products';
        else 
            api = 'https://api.escuelajs.co/api/v1/categories/'+categorie+'/products';
        
        const res = await axios.get(api);
        return res.data;
    }

    getData().then(prods => setProduits(prods));
  }, [categorie]);

  return (
    <div className="list-produits"> 
      <select className="select-categorie" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
        <option value="0">Tous les produits</option>
        {categories.map((item) => (
          <option value={item.id} key={item.id}>{item.name}</option>
        ))}
      </select>

      <div className="produits"> 
        {produits.length === 0 ? <h1 className="no-produits">Pas de produits</h1> : 
          produits.map(p => <Produit produit={p} className="produit" />)
        }
      </div>
    </div>
  );
};

export default ListProduits;
