import BlockInfo from "./BlockInfo";
import InfoHeader from "./InfoHeader";
const BlocksContainer = ({ latestBlocks, blockNumber }) => {
  return (
    <div className="mx-auto w-11/12 rounded-lg bg-slate-50 border-solid border-1  ">
      <InfoHeader text={`Last Block $`} blockNumber={blockNumber} />

      <ul className="p-4 pt-0">
        {latestBlocks.map((block, i) => (
          <BlockInfo key={i} block={block} index={i} />
        ))}
      </ul>
    </div>
  );
};
export default BlocksContainer;
