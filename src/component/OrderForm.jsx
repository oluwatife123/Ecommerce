import React, { useState } from 'react';
import { db, collection, addDoc, serverTimestamp } from '../firebase-config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure toast styles are imported

const OrderForm = () => {
  const [order, setOrder] = useState({
    fooditem: '',
    black_stew: '',
    drawsoup: '',
    drink: 'Coke', // Default drink selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'orders'), { 
        ...order, 
        timestamp: serverTimestamp() // Ensures proper sorting
      });

      setOrder({ fooditem: '', black_stew: '', drawsoup: '', drink: 'Coke' });

      // ✅ Green Success Toast  
      toast.success('Order placed successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: "green", color: "white" }, // Green background
      });

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className='h-full' id='order'>
      <h2 className='text-center font-bold text-[1.2rem] mt-6 mb-5'>Create New Order</h2>

      {/* Form Container */}
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className='w-[80%] lg:w-[30%]'>
          <input
            className='shadow-2xl py-2 pr-6 pl-2 border w-full mb-3'
            type="text"
            name="fooditem"
            placeholder="Food Item"
            value={order.fooditem}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className='shadow-2xl py-2 pr-6 pl-2 border w-full mb-3'
            type="text"
            name="black_stew"
            placeholder="Black Stew"
            value={order.black_stew}
            onChange={handleChange}
          />
          <br />
          <input
            className='shadow-2xl py-2 pr-6 pl-2 border w-full mb-3'
            type="text"
            name="drawsoup"
            placeholder="Drawsoup"
            value={order.drawsoup}
            onChange={handleChange}
          />
          <br />

          {/* Drink Selection Dropdown */}
          <select
            className='shadow-2xl py-2 pr-6 pl-2 border w-full mb-3'
            name="drink"
            value={order.drink}
            onChange={handleChange}
            required
          >
            <option value="Coke">Coke</option>
            <option value="Fanta">Fanta</option>
            <option value="Yoghurt">Yoghurt</option>
          </select>
          <br />

          {/* Submit Button */}
          <div className='flex justify-center w-full mb-10'>
            <button 
              type="submit" 
              className='bg-[blue] px-10 py-2 rounded text-white font-bold mt-2 hover:bg-blue-900'
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
