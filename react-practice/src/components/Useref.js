import React, { useEffect } from "react";
import { useRef } from "react";

const Useref = () => {
  const textref = useRef();

  useEffect(() => {
    textref.current.focus();
  }, []);
  return (
    <div>
      <div>Useref</div>
      <input type="text" ref={textref} />
    </div>
  );
};

export default Useref;
