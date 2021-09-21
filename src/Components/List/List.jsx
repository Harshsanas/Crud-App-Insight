import React,{useEffect,useState} from 'react'
import axios from 'axios'

export default function List() {

    const [list,setList]=useState([])
  

    useEffect(()=>{
    const {data} = axios.get("http://localhost:3033/form").then((res) => {
    // setList(...data,data)
    console.log({data});
   })
   .catch((err) => console.log(err));
    },[])
    return (
        <div>
        </div>
    )
}
