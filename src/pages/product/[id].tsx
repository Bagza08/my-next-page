import React from "react";
import { useRouter } from "next/router";

function ProductDetail() {
  const route = useRouter();

  return (
    <>
      <div>Detail Product</div>
      <div>nama product : {route.query.id}</div>
    </>
  );
}

export default ProductDetail;
