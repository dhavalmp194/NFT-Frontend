import "./App.css";
import ConnectWallet from "./component/connectwallet";
import SmartContract from "./component/smartContract";

function App() {
  return (
    <div className="App">
      <ConnectWallet />
      <SmartContract />
    </div>
  );
}

export default App;
