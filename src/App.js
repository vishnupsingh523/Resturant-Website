import React, {useState} from 'react';

function App(){
  const [number, setNumber] = useState(0);
  let num = number;
  const incrementNum = ()=>{
    num++;
    setNumber(num);
  };

  return(
    <div>
      <h1>{number}</h1>
      <button onClick={incrementNum}>Click Me</button>
    </div>
  )
};

export default App;