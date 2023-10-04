import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import ProductSearch from "../Buscador/Buscador";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, 'products');
    getDocs(queryCollection)
      .then(resp => setProduct(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(setLoading(false));
  }, []);

  return (
    <center>
      <div className="row">
        <ProductSearch onCategoryChange={handleCategoryChange} />
        {loading ? (
          <h2>Cargando ...</h2>
        ) : (
          <ItemList products={products} selectedCategory={selectedCategory} />
        )}
      </div>
    </center>
  );
};

export default ItemListContainer;