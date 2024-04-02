import { IoReceiptOutline } from "react-icons/io5";

const TransactionInfo = ({ transaction, index }) => {
  const dynamicBorder =
    index === 5 ? "" : "border-solid border-b-2  border-sky-600 ";
  return (
    <>
      <div
        className={`flex align-items-center box-content h-12 justify-between gap-2 py-4 ${dynamicBorder}`}
      >
        <div className="flex align-items-center gap-1 ">
          <div className="none sm-flex w-11 content-center bg-gray-200 text-muted rounded p-3">
            <IoReceiptOutline />
          </div>
          <span className="content-center blockInfo">
            {transaction.hash.slice(0, 20)}...
          </span>
        </div>
        <div className="flex flex-col text-left">
          <div>
            <span className="font-semibold">From: </span>
            <span className="blockInfo">
              {transaction.from.slice(0, 20)}...
            </span>
          </div>
          <div>
            <span className="font-semibold">To: </span>
            <span className="blockInfo">{transaction.to.slice(0, 20)}...</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default TransactionInfo;
