import React, {useState} from 'react';

const FindLongestWordLength = () => {
  const [longestWord, setLongestWord] = useState('')
  const [longestWordLength, setLongestWordLength] = useState(0);
  const [tarStr, setTarStr] = useState('');

  const handleChange = (e) => {
    setTarStr(e.target.value)
  }

  const handleClick = () => {
    let str = tarStr;
    let newArr = str.split(" ");
    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i].length > longestWord.length) {
        setLongestWordLength(newArr[i].length)
        setLongestWord(newArr[i])
      }
    }
  }

  return(
    <React.Fragment>
      <hr/>
      <h5>Enter text in input and click button to find longest word</h5>
      <textarea rows="7" cols="50" onChange={handleChange}></textarea>
      <button onClick={handleClick}>Click</button>
      {longestWordLength > 0 && <h1>The Longest Word is: {longestWord}</h1>}
      {longestWordLength > 0 && <h5>With {longestWordLength} characters</h5>}
    </React.Fragment>
  )
}
export default FindLongestWordLength;