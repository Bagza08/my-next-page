// ini adalah client side rendering

import { fetcher } from "@/lib/swr/fetcher";
import ProductDetailViews from "@/views/product/detail";
import { useRouter } from "next/router";
import useSWR from "swr";

function ProductDetail() {
  const route = useRouter();

  const { data } = useSWR(`/api/product/${route.query.id}`, fetcher);

  const dataCard = data?.data;

  console.log(data?.data);

  return <ProductDetailViews data={dataCard} />;
}

// ===================================================================================================

// ini addalah server side rendering

// function ProductDetail({ product }: { product: productType }) {
//   return <ProductDetailViews data={product} />;
// }

// export async function getServerSideProps({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
//   const response = await res.json();

//   return {
//     props: {
//       product: response?.data,
//     },
//   };
// }

// ===================================================================================================

// ini addalah statisc site generation

// function ProductDetail({ product }: { product: productType }) {
//   return <ProductDetailViews data={product} />;
// }

// daftarkan dulu path nya

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/product`);
//   const response = await res.json();

//   const paths = response?.data?.map((product: productType) => ({
//     params: { id: product.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
//   const response = await res.json();

//   return {
//     props: {
//       product: response?.data,
//     },
//   };
// }

export default ProductDetail;
