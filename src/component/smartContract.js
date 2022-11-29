import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { toast } from "react-toastify";
import abi from "../utils/abi.json";
import { Contract } from "@ethersproject/contracts";
import { goerliContractAddress, mumbaiContractAddress } from "../utils/config";

const SmartContract = () => {
  const { library, active, chainId } = useWeb3React();

  const [mintText, setMintText] = useState("Mint");

  const mint1 = () => {
    if (active) {
      setMintText("Mint in progress...!");
      let contractAddress;
      if (chainId == 5) {
        contractAddress = goerliContractAddress;
      } else if (chainId == 80001) {
        contractAddress = mumbaiContractAddress;
      }
      const contract = new Contract(contractAddress, abi, library.getSigner());

      contract
        .mint(document.getElementById("quote1"))
        .then((res) => {
          toast.success(`Transaction hash: ${res.hash}`);
          setMintText("Mint");
        })
        .catch((err) => {
          console.log("%c Line:42 🍷 err", "color:#2eafb0", err);
          toast.error("Something went wrong");
          setMintText("Mint");
        });
    } else {
      toast.error("Please connect wallet");
    }
  };

  const mint2 = () => {
    if (active) {
      setMintText("Mint in progress...!");
      let contractAddress;
      if (chainId == 5) {
        contractAddress = goerliContractAddress;
      } else if (chainId == 80001) {
        contractAddress = mumbaiContractAddress;
      }
      const contract = new Contract(contractAddress, abi, library.getSigner());

      contract
        .mint(document.getElementById("quote2"))
        .then((res) => {
          toast.success(`Transaction hash: ${res.hash}`);
          setMintText("Mint");
        })
        .catch((err) => {
          console.log("%c Line:42 🍷 err", "color:#2eafb0", err);
          toast.error("Something went wrong");
          setMintText("Mint");
        });
    } else {
      toast.error("Please connect wallet");
    }
  };

  return (
    <div>
      <div>
        <p id="quote1">"Just Do IT"</p>
        <button onClick={mint1}>{mintText}</button>
      </div>

      <div>
        <p id="quote2">Never lose hope</p>
        <button onClick={mint2}>{mintText}</button>
      </div>
    </div>
  );
};

export default SmartContract;
