import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetAllProductMutation,
  useSearchProductMutation,
} from "../app/service/products";

const Contents = () => {
  const [getProducts] = useGetAllProductMutation();
  const [products, setProducts] = useState([]);

  //search
  const [searchProduct] = useSearchProductMutation();
  const navigate = useNavigate();

  //search form
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res.data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [getProducts]);

  const search = async () => {
    try {
      const res = await searchProduct(query);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  const reset = async () => {
    try {
      const res = await searchProduct("");
      setProducts(res.data.products);
      setQuery("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="py-2">
        <div className="bg-gray-200 rounded-lg p-2">
          <div className="p-2">
            <input
              className="w-full p-2 rounded-xl outline-none"
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex justify-end items-center space-x-6 my-10">
            <button
              className="bg-green-500 px-6 py-2 rounded-lg"
              onClick={() => navigate("create")}
            >
              <div className="flex space-x-2 items-center">
                <p className="text-white text-[20px]">Create</p>
              </div>
            </button>
            <button
              className="bg-orange-500 px-6 py-2 rounded-lg"
              onClick={reset}
            >
              <div className="flex space-x-2 items-center">
                <p className="text-white text-[20px]">Reset</p>
              </div>
            </button>

            <button
              className="bg-orange-500 px-6 py-2 rounded-lg"
              onClick={search}
            >
              <div className="flex space-x-2 items-center">
                <p className="text-white text-[20px]">Search</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="py-2 overflow-y-auto max-h-[100vh]">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Brand</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Rating</th>
                <th className="border border-gray-300 px-4 py-2">Stock</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((p) => (
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {p.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img src={p.images[0]} className="w-[80px]" />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.brand}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.category}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.rating}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.stock}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex justify-center items-center space-x-2">
                      <button onClick={() => navigate(`detail/${p.id}`)}>
                        Edit
                      </button>
                      <button>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contents;
