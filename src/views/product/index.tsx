import React from "react";
import Image from "next/image";
import { productType } from "@/types/product.types";

function ProductViews(props: any) {
  const { data } = props;

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-5">Product</h1>
      <div className="flex flex-wrap items-center justify-center">
        {data?.length > 0 ? (
          <>
            {data?.map((item: productType) => (
              <div
                key={item?.id}
                className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-3 m-3 w-[300px] h-[300px]"
              >
                <Image
                  onClick={() => window.open('/product/' + item?.id)}
                  src={item?.image}
                  alt={item?.name}
                  width={500}
                  height={500}
                  className="rounded-lg w-[200px] h-[200px] object-cover cursor-pointer"
                />
                <div className="ml-3 mt-3">
                  <p>{item?.name}</p>
                  <p>{item?.price}</p>
                  <p>{item?.size}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-3 m-3 w-[300px] h-[300px]"
              >
                <div className="rounded-lg w-[200px] h-[200px] object-cover bg-gray-300 animate-pulse" />
                <div className="ml-3 mt-3">
                  <p className="bg-gray-300 animate-pulse h-[10px] w-[100px] mt-1" />
                  <p className="bg-gray-300 animate-pulse h-[10px] w-[100px] mt-1" />
                  <p className="bg-gray-300 animate-pulse h-[10px] w-[100px] mt-1" />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default ProductViews;
