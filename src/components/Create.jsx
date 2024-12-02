import React, { useState } from "react";
import { useAddNewProductMutation } from "../app/service/products";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  // Form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  //Function
  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: Math.floor(Math.random() * 1000),
        title,
        description,
        stock,
      };
      await addNewProduct(newProductData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8">
      <div className="rounded-xl bg-gray-200">
        <div className="flex justify-center items-center p-2">
          <p className="text-4xl">Add New Product</p>
        </div>
        <div className="grid grid-cols-3 gap-5 p-2">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-2 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="px-4 py-2 outline-none w-full"
          />
        </div>
        <div className="flex justify-center items-center space-x-4 py-6">
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
