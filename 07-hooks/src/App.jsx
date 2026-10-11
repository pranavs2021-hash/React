import { useState } from 'react';

const App = () => {
  const [first, setit] = useState([10,20,30,40]);
  function changenum(){
      setit(30,40,50)
  }

  return (
    <div>
      <h1 >{first}<br />

      </h1>
      <h1 onClick={changenum} >click here</h1>
    </div>
  );
};

export default App;