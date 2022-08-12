import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { StaticData } from './staticData';
import DisplayTable from './components/DisplayTable';
import TestTable from './components/TestTable';
import Header from './components/Header';
// 
function App() {

  const [data, setData] = useState([]);

  const getData = async () => {
    // const response = await fetch('https://www.cryptingup.com/api/markets', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.cryptingup.com/api/markets", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // const response = await axios.get('https://www.cryptingup.com/api/markets');
    // const data = response.data;
    // console.log(data);
  }
  
  useEffect(() => {
    // getData()

  }, [])
  
  return (
    <div className="App">
      {/* <TestTable /> */}
      <Header />
      <h1 className='text-3xl text-center pb-6'>Cryptocurrencies Data</h1>
      <DisplayTable data={data} />

      {
        data.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.symbol}</h2>
              <h2>{item.price}</h2>
              <h3>{item.last_price}</h3>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
