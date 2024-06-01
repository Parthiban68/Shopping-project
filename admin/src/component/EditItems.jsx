import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditItems() {
    const {_id} = useParams()
    const [dataForEdit, setDataForEdit] = useState([{}])     

    const fetchdata = async () =>{
        try{
         const response = await axios.get(`http://localhost:3001/product/ed/${_id}`)
            setDataForEdit(response.data.edit)
        }
        catch(error){
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchdata()
      },[]) 

      console.log(dataForEdit);
  return (
    <div>
      {dataForEdit.map((details)=>(
        <div key={details._id} className="w-full h-screen flex flex-col  bg-gray-50 sm:px-4">
          <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
            <form>
            <h1>{details.shoemodel}</h1>
            </form>
           
        </div>
        </div>

      ))}
    </div>
  )
}

export default EditItems