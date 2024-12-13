import React, { useState } from "react";
import { useAddNewProductMutation } from "../app/service/products";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  // Form
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [returnPolicy, setReturnPolicy] = useState("");
  const [warrantyInformation, setWarrantyInformation] = useState("");
  const [shippingInformation, setShippingInformation] = useState("");
  const [weight, setWeight] = useState("");
  const [stock, setStock] = useState("");

  //Function
  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: Math.floor(Math.random() * 1000),
        title,
        brand,
        category,
        description,
        price,
        discountPercentage,
        returnPolicy,
        warrantyInformation,
        shippingInformation,
        weight,
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
          {/* <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 outline-none w-full"
          /> */}
          <div className="p-4 flex justify-center items-center">
            <label className="border-dotted border-2 border-gray-400 rounded-xl w-64 h-64 flex flex-col justify-center items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v-1.75A4.75 4.75 0 017.75 10h.086a4.992 4.992 0 01.37-1.345L10.317 5a4.992 4.992 0 014.415 0l2.109 3.655c.139.24.249.496.328.762H16.25A4.75 4.75 0 0121 14.75v1.75m-6 4.5v-7m0 0l-3 3m3-3l3 3"
                />
              </svg>
              <p className="text-gray-500 mt-2">Upload Image</p>
              <input type="file" className="hidden" />
            </label>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="p-2">
              <h2>Title</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="p-2">
              <h2>Brand</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="p-2">
              <h2>Category</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="p-2">
              <h2>Description</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="p-2">
              <h2>Price</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="p-2">
              <h2>Discount (%)</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="p-2">
              <h2>Return Policy</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                value={returnPolicy}
                onChange={(e) => setReturnPolicy(e.target.value)}
              />
            </div>
            <div className="p-2">
              <h2>Warranty Information</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                value={warrantyInformation}
                onChange={(e) => setWarrantyInformation(e.target.value)}
              />
            </div>

            <div className="p-2">
              <h2>Shipping Information</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                value={shippingInformation}
                onChange={(e) => setShippingInformation(e.target.value)}
              />
            </div>
            <div className="p-2">
              <h2>Weight</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="p-2">
              <h2>Stock</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
          </div>
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
