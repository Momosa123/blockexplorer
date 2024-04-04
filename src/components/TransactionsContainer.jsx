import InfoHeader from "./InfoHeader";
import Transaction from "./TransactionInfo";
const TransactionsContainer = ({ blockNumber, transactions }) => {
  return (
    <div className="mx-auto w-11/12 rounded-lg bg-slate-50 border-solid border-1 ">
      <InfoHeader text={"Latest Transactions"} />

      <ul className="p-4 pt-0">
        {transactions.map(
          (tx, i) =>
            tx && (
              <Transaction
                key={tx.hash}
                blockNumber={blockNumber}
                transaction={tx}
                index={i}
              />
            )
        )}
      </ul>
    </div>
  );
};
export default TransactionsContainer;
