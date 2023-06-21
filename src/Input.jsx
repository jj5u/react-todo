import React from "react";
import { useState } from 'react';

export default function Input() {
  const [inputValue, setInputValue]= useState("")

  const handleChange = (e) => {
  const newTodo=  e.target.value;
    setInputValue(newTodo)
    console.log(newTodo);
  };
  function handleClick(e) {
e.preventDefault()
  }
  return (
    <div>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>add</button>
    </div>
  );
}
