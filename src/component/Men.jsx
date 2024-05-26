import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Men() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    photo();
  }, []);

  const photo = async () => {
    try {
      const response = await axios.get('http://localhost:3001/product/prod');
      setData(response.data.list);
    } catch (error) {
      console.error("Error in fetching the data", error);
    }
  };

  console.log("frontdat",data);
  
  return (
    <div>
   <ul>
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.shoemodel}</h1>
            <h2>{item.gender}</h2>
            <h1>{item.mrp}</h1>
            <img src={item.poster}/>
            <p>{item.description}</p>
            <p>{item.color}</p>
            <p>{item.prdinfo}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Men;
