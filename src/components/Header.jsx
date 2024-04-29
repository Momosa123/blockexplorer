import { FaEthereum } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <div className="none  mb-3 sm:flex gap-2 justify-center items-center  text-muted rounded ">
        <h1 className="font-bold bg-white text-custom-blue text-2xl w-full p-8 ">
          Ethereum Blockexplorer
        </h1>
      </div>
      <div className="flex items-center bg-black py-8">
        <div>
          {" "}
          <h2 className="text-left text-xl mx-auto w-2/3 text-white rounded py-1">
            This website is an example of an Ethereum blockexplorer.
          </h2>
          <span className="text-sm block  mx-auto w-2/3 text-left  text-white ">
            Blockexplorers like{" "}
            <a
              className="text-blue-300"
              href="https://etherscan.io/"
              target="_blank"
              rel="noreferrer"
            >
              etherscan
            </a>{" "}
            give us the ability to view lots of different information about the
            blockchain. You can see the frontend code{" "}
            <a
              className="text-blue-300"
              href="https://github.com/Momosa123/front_blockexplorer"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </span>
        </div>

        <div className="w-1/3 grid grid-rows-2  grid-flow-col gap-1 h-fit ">
          <FaEthereum className="text-custom-blue justify-self-end row-span-2 col-span-1  text-4xl " />
          <span className="justify-self-start text-white">ETHER price:</span>
          <span className="justify-self-start text-white"> $2000</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
