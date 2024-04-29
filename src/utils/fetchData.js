import { Alchemy, Network } from "alchemy-sdk";

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
export default async function fetchData(
  setBlockNumber,
  blockNumber,
  setLatestBlocks,
  setTransactions,
  setLoading
) {
  try {
    const latestBlockNumber = await fetchBlockNumber();
    setBlockNumber(latestBlockNumber);
    const lastBlock = await fetchTransactions(latestBlockNumber);

    if (blockNumber) {
      const lastBlockNumbers = [];
      for (let i = 1; i < 7; i++) {
        const num = blockNumber - i;
        lastBlockNumbers.push(num);
      }
      const responses = await Promise.all(
        lastBlockNumbers.map(element => fetchTransactions(element))
      );

      setLatestBlocks(responses);
      setTransactions(lastBlock.transactions.slice(0, 6));
    }
  } catch (error) {
    console.log("Something went wrong");
  } finally {
    setLoading(false);
  }
}
