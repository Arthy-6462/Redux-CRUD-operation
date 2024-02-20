import React, { useState } from 'react';
import Test from './Test';

const Controlled = () => {
const[name,setName]=useState('');
const handleChange=e=>{
    setName(e.target.value)

}
  return (
    <div>
            <h2>Name:{name}</h2>
            <input type="text" onChange={handleChange} />
            <Test handleChange={handleChange}/>
    </div>
  )
}

export default Controlled;