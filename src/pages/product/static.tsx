import ProductViews from "@/views/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Product(props: any) {
  const [isLogin] = useState(true);

  const route = useRouter();

  useEffect(() => {
    if (!isLogin) {
      route.push("/auth/login");
    }
  }, [isLogin, route]);

  return <ProductViews data={props?.data} />;
}

export default Product;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      data: response?.data,
    },
  };
}

// static site generation perbedaan dengan yang server adalah kalo yg static akan berubah ketika saat di build saja
