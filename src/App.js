import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import TransactionsContainer from "./components/TransactionsContainer";
import "./App.css";
import BlocksContainer from "./components/BlocksContainer";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

// Fonction utilitaire pour récupérer le numéro de bloc
async function fetchBlockNumber() {
  return await alchemy.core.getBlockNumber();
}

// Fonction utilitaire pour récupérer les transactions pour un bloc donné
async function fetchTransactions(blockNumber) {
  return await alchemy.core.getBlockWithTransactions(blockNumber);
}
const override = {
  display: "block",
  margin: "100px auto",
};
function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [lastBlock, setLastBlock] = useState(null);
  const [latestBlocks, setLatestBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    // const interval = setInterval(() => setTicker(prev => prev + 1), 10000);
    async function fetchData() {
      try {
        const latestBlockNumber = await fetchBlockNumber();
        setBlockNumber(latestBlockNumber);
        const lastBlock = await fetchTransactions(latestBlockNumber);
        setLastBlock(lastBlock);

        setTransactions(lastBlock.transactions.slice(0, 6));

        if (blockNumber) {
          const lastBlockNumbers = [];
          for (let i = 1; i < 7; i++) {
            const num = blockNumber - i;
            lastBlockNumbers.push(num);
          }
          const responses = await Promise.all(
            lastBlockNumbers.map(element => fetchTransactions(element))
          );
          console.log(lastBlock);
          setLatestBlocks(responses);
        }
      } catch (error) {
        console.log("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [blockNumber]);

  return (
    <>
      <h1 className="App mt-4 mb-20 font-bold">Last Block: {blockNumber}</h1>
      {!loading && (
        <div className="flex flex-col md:flex-row gap-4 mx-6">
          <TransactionsContainer
            blockNumber={blockNumber}
            transactions={transactions}
          />
          <BlocksContainer latestBlocks={latestBlocks} />
        </div>
      )}
      <ClipLoader
        color="blue"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
      />
    </>
  );
}

export default App;
