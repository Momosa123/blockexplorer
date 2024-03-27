import BlockInfo from "./BlockInfo";
import InfoHeader from "./InfoHeader";
const BlocksContainer = ({ latestBlocks }) => {
  return (
    <div className="mx-auto w-11/12 rounded border-solid border-2 border-sky-600 ">
      <InfoHeader text={"Latest Blocks"} />

      <ul className="p-4 pt-0">
        {latestBlocks.map((block, i) => (
          <BlockInfo key={i} block={block} index={i} />
        ))}
      </ul>
    </div>
  );
};
export default BlocksContainer;
