import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
  description: string;
};

function Product() {
  const [isLogin] = useState(true);
  const [product, setProduct] = useState([]);

  const route = useRouter();

  useEffect(() => {
    if (!isLogin) {
      route.push("/auth/login");
    }
  }, [isLogin, route]);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => setProduct(response?.data));
  }, []);

  return (
    <>
      <h1>Product</h1>
      <div>
        {product?.length > 0 &&
          product?.map((item: productType) => (
            <div key={item?.id}>{item?.name}</div>
          ))}
      </div>
    </>
  );
}

export default Product;
