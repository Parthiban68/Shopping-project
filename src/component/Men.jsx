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
          <li key={item.id}>
            {item.poster}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Men;
