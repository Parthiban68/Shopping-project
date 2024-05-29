// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// function ProductDetails() {
//   const {_id} = useParams()
//   const [prodetail, setProdetail] = useState([])

//   useEffect(() => {
//     fetchdata()
//   }, [])

//   const fetchdata = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/product/pd/${_id}`);
//       setProdetail(response.data.user);
//     }
//     catch (error) {
//       console.log(error);
//     }
//   };

//  console.log(prodetail);


//   return (
//     <div>
//       {prodetail.map((item, index) => (
//         <p key={index}>{item.Shoemodel}</p>
//       ))}

//     </div>
//   )

// }

// export default ProductDetails

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {

  const [data, setData] = useState([])

  const { _id } = useParams()

  const url = "http://localhost:3001/product/pd/"


  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}${_id}`)

      console.log(response);

      setData(response.data.data)

    } catch (error) {

    }

  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log("data", data);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li>{item._id}</li>
        ))}
      </ul>

    </div>
  )
}

export default ProductDetails