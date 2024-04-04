const InfoHeader = ({ text, blockNumber }) => {
  return (
    <div className="flex justify-between p-4 border-solid border-b-2  border-sky-600">
      <span className="font-bold">{text}</span>
      {text === "Last Block" && <span>{blockNumber}</span>}
    </div>
  );
};
export default InfoHeader;
