import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {
  let param = useParams();
  let prodID = param.id;

  const [arrayItems, setarrayItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "Collection"), where("id", "==", prodID));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setarrayItems(docs[0]);
      setIsLoading(false);
    };
    getItems();
  }, [prodID]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <div className="detailContainer">
            <ItemDetail items={arrayItems}></ItemDetail>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
