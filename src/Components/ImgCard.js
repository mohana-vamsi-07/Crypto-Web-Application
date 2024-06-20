import React from 'react'

const ImgCard = (props) => {
  return (
    <>
    <img src={props.url} alt={props.name} width={50} height={50}/><hr/>
    <p style={{color:"orange",fontWeight:"bold"}}>{props.name}</p>
    <p>Rank : {props.rank}</p>
    <p>Symbol : {props.symbol}</p>
    <p>Price in $ : {props.price}</p>
    <p>marketCap : {props.marketCap}</p>
    {
      props.priceChange<0 ?(<p className='red'>PriceChange : {props.priceChange.toFixed(2)}%</p>):(<p className='green'>PriceChange : {props.priceChange.toFixed(2)}%</p>)
    }
    </>
  )
}

export default ImgCard
