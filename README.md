# Ethereum Block Explorer

The lessons this week covered the Ethereum JSON-RPC API and the `ethers.js` library giving us the ability to query the Ethereum blockchain and make transactions!

Blockexplorers give us the ability to view lots of different information about the blockchain including data about:

- the blockchain network itself
- blocks in the blockchain
- transactions in a block
- accounts
- and many other things

[Etherscan](https://etherscan.io/) is a good example of an Ethereum blockexplorer.

## 1. Architecture

I use React for the frontend and the design is inspired by etherscan.io. The backend is a serverless cloudflare worker which deals with the connection (provider) with the Ethereum blockchain to fetch the data. The main purpose of using a cloudflare worker is to hide the API key provided by Alchemy to connect to the Ethereum blockchain.

## 2. Tech Stack

In the frontend it is a react web app with Tailwind for styling. In the cloudflare worker it is Javascript.

## 3. API calls on Ethereum block

3 API methods are used on the worker to fetch data on the Ethereum blockchain:

> getBlockNumber to fetch the latest block number
> getBlock(number) which returns infos of the latest block. This method is also used to get the 6 blocks prior to the last one
> fetch("'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'") to get the current value of an ETH

## 4. Deployment

The frontend and the worker are hosted on cloudflare. The frontend is connected to cloudflare via github for continious deploymentt.
