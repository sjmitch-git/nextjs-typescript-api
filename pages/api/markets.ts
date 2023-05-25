// request url https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=45&page=1&sparkline=false&locale=en

// response body
/*
{
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 26363,
    "market_cap": 511787955585,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 554473346899,
    "total_volume": 17927475239,
    "high_24h": 26673,
    "low_24h": 25887,
    "price_change_24h": -309.2409173330452,
    "price_change_percentage_24h": -1.15941,
    "market_cap_change_24h": -5525778083.55658,
    "market_cap_change_percentage_24h": -1.06817,
    "circulating_supply": 19383343,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -61.75417,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 38842.8332,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-05-25T13:35:53.590Z"
  },

*/

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
