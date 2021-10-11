import React, { useState, useEffect } from 'react';
import axios from 'axios';

const client = axios.create();

const App = ()=>{
  const [test, setTest] = useState('NOT CONNECTED');

  useEffect(() => {
    async function fetchData(){
      const res = await client.get('/test');
      setTest(res.data);
    };
    fetchData();
    }
    , [])

  return(
    <div>
      Hello World
      <br/>
      {test}
    </div>
  );
}

export default App;
