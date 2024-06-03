import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

function ListItem(props) {
    const [data, setData] = useState([])
    const [update, setUpdate]=useState()

    const Auth = useAuth()

    useEffect(() => {
        items()
    }, [])

    const items = () => {
        try {
            axios.get(`http://localhost:3001/product/listitem`)
                .then(res => setData(res.data.listitems))
        }
        catch (err) {
            console.log(err);
        }
    }

    // const deleteit = async () =>{
    //     console.log(update);
    //     // try{
    //     //     const response = await axios.delete(`http://localhost:3001/product/delete`)
    //     // }
    // }
    console.log(data._id);
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Product List
                    </h3>
                </div>

            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">ShoeModel</th>
                            <th className="py-3 px-6">Price</th>
                            <th className="py-3 px-6">Gender</th>
                            <th className="py-3 px-6">Color</th>
                            <th className="py-3 px-6"></th>
                            <th className="py-3 px-6"></th>
                            <th className="py-3 px-6"></th>
                            <th className="py-3 px-6"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            data.map((item) => (
                                <tr key={item._id}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.poster} className="w-16 h-16 rounded-full" />
                                        <div>
                                            <h1 className="block text-gray-700 text-sm font-bold">{item.shoemodel}</h1>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">{item.mrp}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{item.gender}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{item.color}</td>
                                    <td className="text-center  whitespace-nowrap">
                                        <NavLink to={`/edititems/${item._id}`} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-100 rounded-lg">
                                            Edit
                                        </NavLink>
                                    </td>
                                    <td className="text-center  whitespace-nowrap">
                                        <button 
                                        onClick={()=>setUpdate(`${item._id}`)}
                                        className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-100 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                    <td className="text-center whitespace-nowrap">
                                    <p>( {item.stock} )</p>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default ListItem