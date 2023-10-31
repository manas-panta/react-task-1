import React, {useState} from 'react'

export default function WordCounter() {
    const [count, setCount] = useState(0);

    function cntFunc(e){
        if(e.target.value === '')
            setCount(0);
        else
            setCount(e.target.value.trim().split(/\s+/).length);        
    }
  return (
    <>
      <div className="container">
        <div className="content">
            <h2>Responsive Paragraph Word Counter</h2>
            <textarea name="wordCnt" id="wordCnt" cols="50" rows="10" placeholder="Enter any text" onChange={cntFunc} autoFocus></textarea>
            <p>Word Count: <span>{count}</span> </p>
        </div>
      </div>
    </>
  )
}