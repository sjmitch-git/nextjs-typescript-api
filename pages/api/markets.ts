import type { NextApiRequest, NextApiResponse } from "next";

export default async function markets(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=45&page=1&sparkline=false&locale=en";

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
}
