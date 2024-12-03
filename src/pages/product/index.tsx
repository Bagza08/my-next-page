import { fetcher } from "@/lib/swr/fetcher";
import ProductViews from "@/views/product";
import useSWR from "swr";

function Product() {
  const { data } = useSWR("/api/product", fetcher);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((response) => setProduct(response?.data));
  // }, []);

  return <ProductViews data={data?.data} />;
}

export default Product;
