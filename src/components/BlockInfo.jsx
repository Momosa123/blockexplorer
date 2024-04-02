import { LuBox } from "react-icons/lu";
const BlockInfo = ({ block, index }) => {
  const baseFee = block.baseFeePerGas;
  const gasUsed = block.gasUsed;
  let ETH = (gasUsed * baseFee) / 10 ** 19;
  const minerAddress = block.miner;
  const blockNumber = block.number;

  const dynamicBorder =
    index === 5 ? "" : "border-solid border-b-2  border-sky-600 ";

  return (
    <>
      <div
        className={`flex align-items-center box-content h-12 justify-between gap-2 py-4 ${dynamicBorder}`}
      >
        <div className="flex align-items-center gap-1">
          <div className="none sm-flex  w-11 content-center bg-gray-200 text-muted rounded p-3">
            <LuBox className="block" />
          </div>

          <div className="content-center blockInfo">{blockNumber}</div>
        </div>
        <div className="content-center">
          <span className="font-semibold">Fee recipient: </span>
          <span className="blockInfo">{minerAddress.slice(0, 20)}...</span>
        </div>
        <div className="blockInfo content-center">{ETH.toFixed(5)} Eth</div>
      </div>
    </>
  );
};
export default BlockInfo;
