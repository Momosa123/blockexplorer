import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

import "./App.css";

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

// function App() {
//   const [blockNumber, setBlockNumber] = useState();
//   const [transactionsTable, setTransactions] = useState();
//   let listOfTransations = "";
//   useEffect(() => {
//     async function getBlockNumber() {
//       setBlockNumber(await alchemy.core.getBlockNumber());
//     }
//     async function getTransations(blockNumber) {
//       setTransactions(await alchemy.core.getBlockWithTransactions(blockNumber));
//     }

//     getBlockNumber();
//     getTransations(blockNumber);
//   }, [blockNumber]);
//   if (transactionsTable) {
//     listOfTransations = transactionsTable.transactions
//       .slice(0, 20)
//       .map((tx, i) => <li key={i}>{tx.hash.slice(0, 20)}...</li>);
//   }
//   return (
//     <>
//       <h1 className="App">Block Number: {blockNumber}</h1>
//       <ul>{transactionsTable && listOfTransations}</ul>
//     </>
//   );
// }

// export default App;
// Fonction utilitaire pour récupérer le numéro de bloc
async function fetchBlockNumber() {
  return await alchemy.core.getBlockNumber();
}

// Fonction utilitaire pour récupérer les transactions pour un bloc donné
async function fetchTransactions(blockNumber) {
  return await alchemy.core.getBlockWithTransactions(blockNumber);
}

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [transactionsTable, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const latestBlockNumber = await fetchBlockNumber();
      setBlockNumber(latestBlockNumber);

      const transactions = await fetchTransactions(latestBlockNumber);
      setTransactions(transactions.transactions.slice(0, 20));
    }

    fetchData();
  }, []);

  return (
    <>
      <h1 className="App">Block Number: {blockNumber}</h1>
      <ul>
        {transactionsTable.map(tx => (
          <li key={tx.hash}>{tx.hash.slice(0, 20)}...</li>
        ))}
      </ul>
    </>
  );
}

export default App;
