import React from "react";
import Image from "next/image";

function ProductDetailViews(props: any) {
  const { data } = props;

  return (
    <>
      <div className="text-3xl font-bold underline my-5">Detail Product</div>
      {/* <div>nama product : {route.query.id}</div> */}

      <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-3 m-3 w-[300px] h-[300px]">
        <Image
          src={data?.image}
          alt={data?.name}
          width={500}
          height={500}
          className="rounded-lg w-[200px] h-[200px] object-cover"
        />
        <div className="ml-3 mt-3">
          <p>{data?.name}</p>
          <p>{data?.price}</p>
          <p>{data?.size}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetailViews;
