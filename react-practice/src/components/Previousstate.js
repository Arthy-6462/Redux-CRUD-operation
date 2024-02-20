import React, { useState } from "react";

const Previousstate = () => {
  const [inputvalue, setInputvalue] = useState("");
  return (
    <>
      <input
        type="text"
        value={inputvalue}
        onInput={(e) => setInputvalue(e.target.value)}
      />
      <h3>currentValue is:{inputvalue}</h3>
    </>
  );
};

export default Previousstate;
