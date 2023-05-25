import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const Currency = () => {
  const router = useRouter();
  const { price, name, ath, rank, mcap } = router.query;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <main className="min-h-screen">
        <nav className="bg-white pl-4 pt-4">
          <Link className="text-blue-600" href={`/`}>
            Back
          </Link>
        </nav>
        <div className="bg-white pt-8 pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
              {name}
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex-1 p-4">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <ul className="list-disc pl-5">
              <li>Current Price: {price}</li>
              <li>All time high price: {ath}</li>
              <li>Market Cap: {mcap}</li>
              <li>Market Cap Rank: {rank}</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Currency;
