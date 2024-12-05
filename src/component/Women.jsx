import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Women() {
  const [productData, setProductData] = useState([{}]);
  const url = 'http://localhost:3001/product/prod'

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () =>{
    const response = await axios.get('http://localhost:3001/product/prod');
    if (Array.isArray(response.data.list)) {
      setProductData(response.data.list);
    } else {
      console.error('Data received is not an array:', response.data);
    }
  }

console.log(productData);

  return (
    <div>
    </div>
  )
}

export default Women