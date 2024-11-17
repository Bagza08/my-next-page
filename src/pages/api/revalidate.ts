// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({
      revalidated: false,
      message: "Invalid token",
    });
  }

  if (req.query.data === "product") {
    try {
      await res.revalidate("/product/static");
      return res.json({ revalidated: true });
    } catch (error) {
      return res
        .status(500)
        .send({ revalidated: false, message: error as string });
    }
  }

  return res.json({
    revalidated: false,
    message: "Pilih data mana yang mau di revalidate",
  });
}
