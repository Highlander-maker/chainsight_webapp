import React, { useState } from "react";
import ChainSelector from "./components/ChainSelector";
import ValidatorList from "./components/ValidatorList";

const App = () => {
  const [currentChain, setCurrentChain] = useState("");
  const [selectedChain, setSelectedChain] = useState("");

  const handleChainSelected = (chain) => {
    setCurrentChain(chain);
  };

  return (
    <div>
      <h1>ChainSight Validators</h1>
      <ChainSelector onChainSelected={handleChainSelected} />
      <ValidatorList selectedChain={selectedChain} />
    </div>
  );
};

export default App;
