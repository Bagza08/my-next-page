// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.product![1]) {
    const data = await retrieveDataById("products", req.query.product![1]);
    res.status(200).json({ status: true, statusCode: 200, data });
  } else {
    const data = await retrieveData("products");
    res.status(200).json({ status: true, statusCode: 200, data });
  }

  // console.log("retrieveDataById:", retrieveDataById);
  // console.log("Type of retrieveDataById:", typeof retrieveDataById);
  // console.log("retrieveDataById:", retrieveData);
  // console.log("Type of retrieveData:", typeof retrieveData);

  // const data = await retrieveData("products");
  // res.status(200).json({ status: true, statusCode: 200, data });
  // console.log("ini product", req.query.product![1]);
}
