import InfoHeader from "./InfoHeader";
import Transaction from "./TransactionInfo";
const TransactionsContainer = ({ blockNumber, text, transactions }) => {
  return (
    <div className="mx-auto w-11/12 bg-slate-50 rounded border-solid border-2 border-sky-600 ">
      <InfoHeader text={"Latest Transactions"} />

      <ul className="p-4 pt-0">
        {transactions.map((tx, i) => (
          <Transaction
            key={tx.hash}
            blockNumber={blockNumber}
            transaction={tx}
            index={i}
          />
        ))}
      </ul>
    </div>
  );
};
export default TransactionsContainer;
