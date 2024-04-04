import { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa6";

import ClipLoader from "react-spinners/ClipLoader";
import TransactionsContainer from "./components/TransactionsContainer";
import "./App.css";
import BlocksContainer from "./components/BlocksContainer";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const url = " https://blockexplorerworker.mouhamadoul-sarr.workers.dev/";

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

const override = {
  display: "block",
  margin: "100px auto",
};
function App() {
  const [currentBlock, setCurrentBlock] = useState();
  const [latestBlocks, setLatestBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "GET", // Méthode GET
          headers: {
            "Content-Type": "application/json",
          },
          // Vous pouvez également ajouter d'autres options ici si nécessaire
        });
        const data = await response.json();
        console.log(data);

        // Mettre à jour l'état uniquement si le composant est toujours monté

        setCurrentBlock(data.lastBlock);
        setLatestBlocks(data.lastBlocks);
        setTransactions(data.lastTransactions);
      } catch (error) {
        console.log("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  console.log(transactions);

  return (
    <>
      {!loading && (
        <div className="App ">
          <div className="mt-4 mb-20">
            <div className="none  mb-3 sm:flex gap-2 justify-center items-center  text-muted rounded p-3">
              <div>
                <FaEthereum className="  text-4xl text-custom-blue" />
              </div>

              <h1 className="font-bold text-custom-blue text-2xl">EtherScan</h1>
            </div>
            <h2 className="mx-auto w-1/3 bg-custom-blue rounded p-2">
              This website is an example of an Ethereum blockexplorer.
              Blockexplorers give us the ability to view lots of different
              information about the blockchain. You can see the frontend code{" "}
              <a
                className="text-blue-100"
                href="https://github.com/Momosa123/front_blockexplorer"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
            </h2>
          </div>
          <div></div>
          <div></div>
          <div className="flex flex-col md:flex-row gap-4 mx-6">
            <TransactionsContainer
              blockNumber={currentBlock.number}
              transactions={transactions}
            />
            <BlocksContainer latestBlocks={latestBlocks} />
          </div>
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
