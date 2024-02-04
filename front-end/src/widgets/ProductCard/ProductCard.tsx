"use client";

import { IProduct } from "@/shared/types";
import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { HeartIcon } from "@/shared/assets";
import { Checkbox } from "@/shared/ui";

type Props = {
  product: IProduct;
  hasDetails?: boolean;
  hasCompare?: boolean;
};

const ProductItem: FC<Props> = ({ product, hasDetails, hasCompare }) => {
  const { id, name, brand, price, currency, imgUrl, isAvailable, tag } =
    product;

  const [selectedProducts, setSelectedProducts] = useState<IProduct[] | null>();

  const handleChange = (product: IProduct) => {
    setSelectedProducts((state) =>
      state?.some((item) => item.id === product.id)
        ? state.filter((item) => item.id !== product.id)
        : [...(state || []), product]
    );
  };

  return (
    <div className="flex flex-col p-4 group/card">
      <div className="relative mb-2 aspect-square w-full h-full">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          src={imgUrl || "https://placehold.co/600x400/png"}
          alt={`product-img--${id}`}
        />
        {!!tag && (
          <div className="absolute top-0 left-0 px-4 py-2 text-xs text-gray-100 bg-gray-500 hover:opacity-70 transition-all ease-linear">
            {tag}
          </div>
        )}

        {hasDetails && (
          <Link
            className={clsx(
              "absolute bottom-3 left-2 text-xl text-gray-100 border-b-2",
              "hover:text-tone-400 hover:border-tone-400 transition-all ease-linear",
              "md:opacity-0 md:group-hover/card:opacity-100"
            )}
            href={`/products/${id}`}
          >
            Product Details
          </Link>
        )}
        <div className="group absolute top-2 right-2 flex items-center justify-center w-6 h-6 cursor-pointer">
          <HeartIcon classNames="text-gray-900 group-hover:text-red transition-all ease-linear" />
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <h4 className="text-l font-medium">{name}</h4>
          <div className="text-gray-400">{`${currency}${price}`}</div>
        </div>
        <div className="text-sm text-gray-500 mb-2">{brand}</div>

        <div className="flex justify-beetween items-center w-full">
          {isAvailable ? (
            <div
              className={clsx(
                "w-full flex items-center gap-2 text-xs",
                "before:block before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-green-500 before:animate-pulse"
              )}
            >
              Available Now
            </div>
          ) : (
            <div className="w-full text-xs text-gray-300">
              Not Available Now
            </div>
          )}

          {hasCompare && (
            <div className="relative flex justify-end w-full text-xs">
              <Checkbox
                checkboxPosition="cursor-pointer top-0 right-0 left-auto h-5 w-5 -translate-y-[20%]"
                className="min-w-16 pr-7"
                htmlFor={`checkbox-${product.id}`}
                onChange={() => handleChange(product)}
                label="Compare"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
