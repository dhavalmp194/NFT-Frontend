import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { toast } from "react-toastify";
import { injected } from "../utils/connector";

const ConnectWallet = () => {
  const { account, activate, deactivate, active, chainId } = useWeb3React();

  const connectWallet = () => {
    activate(injected);
    // toast.success("Wallet connected");
  };

  const disconnectWallet = () => {
    deactivate();
    toast.success("Wallet disconnected");
  };

  useEffect(() => {
    if (active) {
      if (chainId == 5 || chainId == 80001) {
        toast.success("Connected");
      } else {
        toast.error("Please switch network");
      }
    }
  }, [active]);

  return (
    <div className="App">
      {active ? (
        <>
          <button>{account}</button>
          <button onClick={disconnectWallet}>Disconnect</button>
        </>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}

      <hr></hr>
    </div>
  );
};

export default ConnectWallet;
