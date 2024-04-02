import { useEffect, useState, uRef } from "react";
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
        <div>
          <h1 className="App mt-4 mb-20 font-bold">
            Last Block: {currentBlock.number}
          </h1>
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
