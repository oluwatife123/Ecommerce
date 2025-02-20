// src/OrderForm.js
import React, { useState } from "react";
import { db } from "../firebase-config"; // ✅ Import ONLY db from firebase-config.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // ✅ Import Firestore methods here
import { toast } from "react-toastify";

const OrderForm = () => {
  const [order, setOrder] = useState({
    fooditem: "",
    black_stew: "",
    drawsoup: "",
    drink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "orders"), {
        ...order, // ✅ Spread existing order values
        timestamp: serverTimestamp(), // ✅ Add timestamp at submit time
      });

      setOrder({ fooditem: "", black_stew: "", drawsoup: "", drink: "" }); // ✅ Reset form after submission
      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="h-full" id="order">
      <h2 className="text-center font-bold text-[1.2rem] mt-6 mb-5">Create New Order</h2>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-[80%] lg:w-[30%]">
          <input
            className="shadow-2xl py-2 pr-6 pl-2 border w-full mb-3"
            type="text"
            name="fooditem"
            placeholder="Food Item"
            value={order.fooditem}
            onChange={handleChange}
            required
          />
          <input
            className="shadow-2xl py-2 pr-6 pl-2 border w-full mb-3"
            type="text"
            name="black_stew"
            placeholder="Black Stew"
            value={order.black_stew}
            onChange={handleChange}
          />
          <input
            className="shadow-2xl py-2 pr-6 pl-2 border w-full mb-3"
            type="text"
            name="drawsoup"
            placeholder="Drawsoup"
            value={order.drawsoup}
            onChange={handleChange}
          />
          <input
            className="shadow-2xl py-2 pr-6 pl-2 border w-full mb-3"
            type="text"
            name="drink"
            placeholder="Drink"
            value={order.drink}
            onChange={handleChange}
          />

          <div className="flex justify-center w-full mb-10">
            <button type="submit" className="bg-[blue] px-10 py-2 rounded text-white font-bold mt-2 hover:bg-blue-900">
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
