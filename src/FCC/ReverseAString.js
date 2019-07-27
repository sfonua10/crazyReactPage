import React, {useState} from 'react'

const ReverseAString = () => {
  const [myString, setMyString] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleReverseString = () => {
    const reverseString = inputValue.split("").reverse().join("");
    setMyString(reverseString)
  }
  
  return(
    <React.Fragment>
      <h1>Reverse a String</h1>
      <input onChange={handleInput}/>
      <button onClick={handleReverseString}>Click</button>
      <h1>{myString}</h1>
    </React.Fragment>
  )
}

export default ReverseAString;