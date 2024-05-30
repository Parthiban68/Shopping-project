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
    <div>EditItems</div>
  )
}

export default EditItems