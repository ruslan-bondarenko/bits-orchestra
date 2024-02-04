import React, { FC } from "react";
import axios from "axios";
import { ProductCard } from "@/widgets";

type Props = {
  params: { id: string };
};

async function getProductDataById(id: string) {
  try {
    const response = await axios.get(`http://localhost:3001/products/${id}`);
    const product = response.data;

    return {
      product,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}

const ProductItem: FC<Props> = async ({ params }) => {
  const data = await getProductDataById(params.id);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-lora font-medium text-center mb-6">
        Product Details
      </h2>
      {!!data.product ? (
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <ProductCard product={data.product} />
          </div>
          <div className="md:w-2/3 py-4">
            <h4 className="text-l font-medium text-gray-900 mb-2">
              Description:
            </h4>
            <p className="text-m text-gray-400">{data.product.description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductItem;
