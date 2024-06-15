import React from "react";
import { useState, useEffect } from "react";


function Hooks() {

  const hello = () => {
    setName(name + " khan")
  }

  const [name, setName] = useState("Shahroz");

  // useEffect( () => {}, [1])

  return (
    
    <div>
      <button onClick={hello}>Name is {name} </button>
    </div>
  );

}

export default Hooks;
