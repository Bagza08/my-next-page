import React from "react";
import { useRouter } from "next/router";

function Shops() {
  const { query } = useRouter();

  console.log(query.slug);

  return (
    <>
      <div>shops link</div>
      <div>nama product : {`${query.slug ? query.slug[0] : ""} + ${query.slug ? query.slug[1] : ""} `} </div>
    </>
  );
}

export default Shops;
