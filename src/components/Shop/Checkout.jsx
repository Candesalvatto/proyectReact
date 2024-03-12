import React, { useEffect, useState } from 'react';
import './Shop.css';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/db';
import { useParams } from 'react-router-dom';

export const Checkout = () => {
  const params = useParams();
  const { orderId } = params;
  const [order, setOrder] = useState(null);

  const getOrder = async (id) => {
    try {
      const docRef = doc(db, 'OrdenDeCompra', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("No such document!");
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      return null;
    }
  }

  useEffect(() => {
    console.log("orderId:", orderId);
    getOrder(orderId).then((order) => {
      setOrder(order);
    });
  }, [orderId]);
  

  return (
    <div className="container-all-checkout">
      <div className="checkout-container">
        <h2>
          {order ? `Tu orden con ID ${orderId} fue cargada con éxito!` : 'No se encontró la orden.'}
        </h2>
      </div>
    </div>
  );
}
