import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllProductQuery } from "../app/service/products";

const Contents = () => {
  const { data, isError, isLoading, isSuccess } = useGetAllProductQuery();
  const navigate = useNavigate();

  return (
    <div>
      <div className="py-2">
        <div className="bg-gray-200 rounded-lg p-2">
          <div className="flex justify-end items-center">
            <button
              className="bg-green-500 px-6 py-2 rounded-lg"
              onClick={() => navigate("create")}
            >
              <div className="flex space-x-2 items-center">
                <p className="text-[24px] text-white">+</p>
                <p className="text-white text-[20px]">Create</p>
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
              {data?.products.map((p) => (
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
                    <button>Detail</button>
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
