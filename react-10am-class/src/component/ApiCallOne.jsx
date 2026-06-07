import React, { useState } from 'react';
import { useEffect } from "react";

export default function ApiCallOne() {
  const [data, setdata] = useState([])
  const [count, setcount] = useState(0)
  const handlefetch = async () => {
    let res = await fetch('https://fakestoreapi.com/products/')
    let fullres = await res.json()

    setdata(fullres)
    console.log("luffy");
  }

  useEffect(() => {
    handlefetch()
    console.log("Ashima");


    return () => {
      console.log("luffy");
    }
  }, [count])

  const handleadd = () => {
    setcount(count + 1);
  };
  return (
    <div>

      <h1>{count}</h1>
      <button onClick={handleadd}>add</button>

      <div className='prowrap'>
        {data.map((da, i) => (
          <div key={i}>
            <div className='cardpro'>
              <img src={da.image} height={200} width={200} />
              <h1>{da.title}</h1>
              <h3>Price: {da.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}