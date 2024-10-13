import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Products = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const updatedSearchParams = (newParams) => {
    const paramsObject = Object.fromEntries(searchParams.entries());
    const mergedParams = {...paramsObject, ...newParams}
    setSearchParams(mergedParams)
  }

  return (
    <div>
      <h4>COLORS</h4>
      <button onClick={() => updatedSearchParams({color: 'red'})}>
        RED
      </button>
      <button onClick={() => updatedSearchParams({color: 'white'})}>
        WHITE
      </button>
      <h4>SIZE</h4>
      <button onClick={() => updatedSearchParams({size: 10})}>
        10
      </button>
      <button onClick={() => updatedSearchParams({size: 11})}>
        11
      </button>
      <button onClick={() => updatedSearchParams({size: 12})}>
        12
      </button>
    </div>
  )
}

export default Products