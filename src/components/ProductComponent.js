import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductComponent() {
  const prod = useSelector((state) => state.allProducts.products);
  const productList = prod.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className=" w-1/4 " key={id}>
        <Link to={`product/${id}`}>
          <div className="flex flex-col p-5 m-4 border-2 rounded-md border-gray-500 border-solid bg-white justify-between">
            <div className="flex h-4/5">
              <img className="h-72" src={image} alt={title} />
            </div>
            {/* <div className=""></div> */}
            <div className="h-1/4 flex flex-col content-start">
              <div className="font-bold text-sm self-start border-t border-black w-full h-2/4">
                {title}
              </div>
              <div className="h-2/4">
                <div className="font-bold text-sm">${price}</div>
                <div className="text-gray-500 text-sm font-semibold">
                  {category}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="mt-2 flex flex-wrap  px-11 ">{productList}</div>;
}

export default ProductComponent;
