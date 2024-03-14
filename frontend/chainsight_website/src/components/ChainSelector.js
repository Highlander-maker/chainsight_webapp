import React, { useState } from "react";


const ChainSelector = ({ onChainSelected }) => {
  const [selectedChain, setSelectedChain] = useState("");

  const handleChange = (event) => {
    const chain = event.target.value;
    setSelectedChain(chain);
    onChainSelected(chain);
  };

  return (
    <select value={selectedChain} onChange={handleChange}>
      <option value="">Select a Chain</option>
      <option value="Jackal">Jackal</option>
      <option value="BitSong">BitSong</option>
      <option value="Sentinel">Sentinel</option>
      {/* Add more chains here as needed */}
    </select>
  );
};

export default ChainSelector;
