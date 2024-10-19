import { fetcher } from "@/lib/swr/fetcher";
import ProductViews from "@/views/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

function Product() {
  const [isLogin] = useState(true);

  const { data } = useSWR("/api/product", fetcher);

  const route = useRouter();

  useEffect(() => {
    if (!isLogin) {
      route.push("/auth/login");
    }
  }, [isLogin, route]);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((response) => setProduct(response?.data));
  // }, []);

  return <ProductViews data={data?.data} />;
}

export default Product;
