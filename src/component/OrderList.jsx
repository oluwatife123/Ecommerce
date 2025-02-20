// src/OrderList.js
import React, { useEffect, useState } from 'react';
import { db, collection, getDocs, deleteDoc, doc } from '../firebase-config';
import Button from '../component/Button';
import egusi from "../assets/ebaandegusi.jpeg";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'orders'));
        const ordersArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersArray);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'orders', id));
      setOrders(orders.filter(order => order.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <>
      <div className='lg:flex block w-[100%]' id='orderlist'>
        <div className='lg:w-[50%] bg-[#e9e1e1] rounded ml-4 '>
          <h2 className='text-center text-[red] font-bold text-[1.2rem] mt-6 mb-5'>Order List</h2>
          <p className="mt-2 text-center mb-5 "></p>
          <ul className='w-[100%] lg:w-full mt-5'>
            {orders.map((order) => (
              <div key={order.id} className='flex justify-center'>
                <li className='w-full mx-4 mb-3 shadow-md hover:shadow-2xl p-3 border'>
                  <p className='text-[green] font-bold mb-2'>Food Item: {order.fooditem}</p>
                  <p className='text-[green] font-bold mb-2'>Black Stew: {order.black_stew}</p>
                  <p className='text-[green] font-bold mb-2'>Drawsoup: {order.drawsoup}</p>
                  <p className='text-[green] font-bold mb-2'>Drink: {order.drink}</p>

                  {/* Delete button */}
                  <div className='flex justify-center w-full mt-3'>
                    <button 
                      onClick={() => handleDelete(order.id)} 
                      className='bg-[red] px-10 py-2 rounded text-white font-bold mt-2 hover:bg-red-900'>
                      Delete
                    </button>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>

        {/* Food images */}
        <div className='lg:ml-20 px-3 lg:px-0 lg:w-[40%] mt-36 rounded-full'>
          <img 
            src= {egusi}
            className='w-full rounded-full animate-bounce shadow-2xl' 
            alt="Food" 
          />
        </div>
      </div>
    </>
  );
};

export default OrderList;
