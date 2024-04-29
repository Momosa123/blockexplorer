import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import TransactionsContainer from "./components/TransactionsContainer";
import "./App.css";
import BlocksContainer from "./components/BlocksContainer";
import fetchData from "./utils/fetchData";
import Header from "./components/Header";
// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.

const override = {
  display: "block",
  margin: "100px auto",
};
function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [latestBlocks, setLatestBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const interval = setInterval(() => setTicker(prev => prev + 1), 10000);

    fetchData(
      setBlockNumber,
      blockNumber,
      setLatestBlocks,
      setTransactions,
      setLoading
    );
  }, [blockNumber]);
  console.log(Boolean(latestBlocks));
  return (
    <>
      <Header />
      {(latestBlocks.length === 0 ? false : true) && (
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
