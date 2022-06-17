import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/productSlice";

function ProductDetails() {
    const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.oneProduct.products[productId -1]);
  const { image, title, price, category, description } = product;
  
  console.log(productId);
  

  const fetchProductDetails = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error: ", err);
      });

    dispatch(getProduct(res.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
  }, [productId]);
  return (
    <div className="flex justify-center items-center h-full">
        <div className="bg-white flex flex-row border-2 rounded-md m-5 w-1/2 h-1/2 border-gray-500 border-solid items-center center">
      <div className="p-4 w-1/2"><img src={image} alt="" /></div>
      <div className="flex flex-col p-4 border-l-2 border-gray-500 border-solid">
          <div className="text-3xl font-bold">{title}</div>
      </div>
    </div>
    </div>
  );
}

export default ProductDetails;
