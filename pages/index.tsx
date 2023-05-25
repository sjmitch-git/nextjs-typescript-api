import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { NextApiRequest, NextApiResponse } from "next";

const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : process.env.NEXT_PUBLIC_HOST_URL;

interface ServerSideProps {
  req: NextApiRequest;
  res: NextApiResponse;
}

interface DataProps {
  data: any[];
}

const Home = (data: DataProps) => {
  const cards = data.data;
  return (
    <>
      <Head>
        <title>CoinGecko Market Pairs (USD)</title>
      </Head>
      <main>
        <div className="bg-white pt-8 pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Market Pairs (USD)
            </h1>
            <p className="text-xl text-center text-gray-600">
              The following is a list of crypto currencies with information
              related to the USD trading pair.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* End hero unit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div key={card.id} className="flex flex-col">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={200}
                  height={200}
                  className="object-cover object-center"
                />
                <div className="flex-1 p-4">
                  <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
                  <ul className="list-disc pl-5">
                    <li>Current Price: {card.current_price}</li>
                    <li>24h High: {card.high_24h}</li>
                    <li>24h Low: {card.low_24h}</li>
                  </ul>
                </div>
                <div className="p-4">
                  <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    href={`/currency/${card.id}?name=${card.name}&price=${card.current_price}&ath=${card.ath}&rank=${card.market_cap_rank}&mcap=${card.market_cap}`}
                  >
                    More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export async function getServerSideProps({ req, res }: ServerSideProps) {
  const response = await fetch(`${server}/api/markets`);
  const data = await response.json();

  return { props: { data } };
}
