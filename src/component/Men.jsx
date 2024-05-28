import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

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
  //   <div>
  //  <ul>
  //       {data.map((item) => (
  //         <div key={item.id}>
  //           <h1>{item.shoemodel}</h1>
  //           <h2>{item.gender}</h2>
  //           <h1>{item.mrp}</h1>
  //           <img src={item.poster}/>
  //           <p>{item.description}</p>
  //           <p>{item.color}</p>
  //           <p>{item.prdinfo}</p>
  //         </div>
  //       ))}
  //     </ul>
  //   </div>
  /*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 cursor-pointer">
          {data.map((product) => (
            <div key={product.id} className="group relative">
              <NavLink to={`/pd/${product.id}`}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.poster}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700"> 
                      {product.shoemodel}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.mrp}</p>
              </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Men;
