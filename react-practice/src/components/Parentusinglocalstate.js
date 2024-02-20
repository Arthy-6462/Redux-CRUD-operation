import React from "react";
import { useState } from "react";

const Parentusinglocalstate = () => {
  const [user] = useState("React");
  return (
    <>
      <h2>Parentusinglocalstate</h2>
      <h3>
        <Component1 user={user} />
      </h3>
    </>
  );
};
const Component1 = ({ user }) => {
  return (
    <>
      <h3>component1</h3>
      <h3>
        <Component2 user={user} />
      </h3>
    </>
  );
};
const Component2 = ({ user }) => {
  return (
    <>
      <h3>Component2</h3>
      <h3>
        <Component3 user={user}/>
      </h3>
    </>
  );
};
const Component3 = ({ user }) => {
  return (
    <>
      <h3>component3</h3>
      <h3>
        <Component4 user={user}/>
      </h3>
    </>
  );
};
const Component4 = ({ user }) => {
  return (
    <>
      <h3>component4</h3>
      <h3>
        <Component5 user={user}/>
      </h3>
    </>
  );
};
const Component5 = ({ user }) => {
  return (
    <>
      <h3>component5</h3>
      <h3>{`user is ${user}`}</h3>
    </>
  );
};

export default Parentusinglocalstate;
