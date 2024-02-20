import React, { createContext,useContext,useState } from 'react'

const usercontext=createContext();
const Parentusingcontext = () => {
    const[user]=useState("React")
  return (
    <div>
    <usercontext.Provider value={user}/>
    <div>Parentusingcontext</div>
    <h3><Component1/></h3>
    <usercontext.Provider/>
    </div>
  )
 
  }
  function Component1(){
    return(
        <div>
            <Component2/>
        </div>
    )
  }
  function Component2(){
    return(
        <div>
            <Component3/>
        </div>
    )
  }
  function Component3(){
    return(
        <div>
            <Component4/>
        </div>
    )
  }
  function Component4(){
    return(
        <div>
            <Component5/>
        </div>
    )
  }
  function Component5(){
    const user=useContext(usercontext);
    return(
        <div>
            <Component5/>
            <h3>{`user is ${user}`}</h3>
        </div>
    )
  }
export default Parentusingcontext;