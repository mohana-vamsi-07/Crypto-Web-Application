import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImgCard from './ImgCard';


const Home = () => {
    const [search,setSearch] =useState('');
    const [data,setData] =useState([]);
    const handler = (e)=>{
        setSearch(e.target.value);
    }
    useEffect(()=>{
      const options = {
        method: 'GET',
        url: 'https://openapiv1.coinstats.app/coins',
        params: {limit: '100'},
        headers: {
          accept: 'application/json',
          'X-API-KEY': 'NWEBFXOqd01ycxoyGmyv4aUZFIRTTu0/IWEqfaG9MY8='
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
          setData(response.data.result);
          //console.log(data);
          console.log(response.data.result);
        })
        .catch(function (error) {
          console.error(error);
        });
    },[])
  return (
    <>
    <div className='header'>
      <input value={search} onChange={handler} placeholder='search for crypto' />
    </div>
    {        data.length >0 && 
             <div className='grid-container'>
              {data.filter(crypto=>
                crypto.name.toLowerCase().includes(search.toLowerCase())
              )
              .map(crypto =>
              <div>
                <ImgCard  
                  name={crypto.name} rank={crypto.rank} price={crypto.price} marketCap={crypto.marketCap} 
                  key={crypto.id} url={crypto.icon} symbol={crypto.symbol} priceChange={crypto.priceChange1d}
                />
                </div>
                )}

             </div>
    
    }
    </>
  )
}

export default Home
