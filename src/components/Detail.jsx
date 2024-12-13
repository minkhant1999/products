import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailProductMutation } from "../app/service/products";

const Detail = () => {
  const { id } = useParams();
  const [getDetailProduct] = useGetDetailProductMutation();
  const [detailProduct, setDetailProduct] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getDetailProduct(id);
        setDetailProduct(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, [getDetailProduct]);

  return (
    <>
      <div className="p-4 bg-gray-200 w-full h-full">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <img src={detailProduct?.images[0]} alt="Testing" className="" />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="p-2">
              <h2>Title</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.title}
              />
            </div>
            <div className="p-2">
              <h2>Brand</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.brand}
              />
            </div>
            <div className="p-2">
              <h2>Category</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.category}
              />
            </div>
            <div className="p-2">
              <h2>Description</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.description}
              />
            </div>
            <div className="p-2">
              <h2>Price</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.price}
                onChange={(e) =>
                  setDetailProduct({ ...detailProduct, price: e.target.value })
                }
              />
            </div>
            <div className="p-2">
              <h2>Discount (%)</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.discountPercentage}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="p-2">
              <h2>Return Policy</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.returnPolicy}
              />
            </div>
            <div className="p-2">
              <h2>Warranty Information</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.warrantyInformation}
              />
            </div>

            <div className="p-2">
              <h2>Shipping Information</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.shippingInformation}
              />
            </div>
            <div className="p-2">
              <h2>Weight</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.weight}
              />
            </div>
            <div className="p-2">
              <h2>Stock</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.stock}
              />
            </div>
            <div className="p-2">
              <h2>Rating</h2>
              <input
                className="outline-none w-2/3 py-2 px-4"
                type="text"
                placeholder="title"
                value={detailProduct.rating}
              />
            </div>
          </div>
        </div>
        <div class="overflow-x-auto w-[80%] mx-auto mt-10">
          <table class="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr class="bg-gray-100 text-left">
                <th class="border border-gray-300 px-4 py-2">Reviewer Name</th>
                <th class="border border-gray-300 px-4 py-2">Reviewer Email</th>
                <th class="border border-gray-300 px-4 py-2">Rating</th>
                <th class="border border-gray-300 px-4 py-2">Comment</th>
                <th class="border border-gray-300 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {detailProduct.reviews?.map((review) => (
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {review.reviewerName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.reviewerEmail}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.rating}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.comment}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center space-x-4 pt-10">
          <button className="px-4 py-2 rounded-lg text-white bg-gray-400">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg text-white bg-orange-400">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
