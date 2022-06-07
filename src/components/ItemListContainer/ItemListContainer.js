import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

// grilla de productos, por el momento tengo 4 para este demo
const ItemListContainer = ({ saludo }) => {
  // intenté con varios modos y sólo useState me permite guardar mis productos posterior al render
  const [arrayItems, setarrayItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "Collection"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setarrayItems(docs);
      setIsLoading(false);
    };
    getItems();
  }, []);

  return (
    <div>
      <h3>{saludo}</h3>
      <br />
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <Container>
          <div className="itemContainer">
            <ItemList items={arrayItems}></ItemList>
          </div>
        </Container>
      )}
    </div>
  );
};

export default ItemListContainer;
