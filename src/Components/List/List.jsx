import React,{useEffect,useState} from 'react'
import axios from 'axios'

export default function List() {

    const [list,setList]=useState({})
  

    useEffect(()=>{
    axios
    .get("http://localhost:3033/form")
    .then((res) => {
    setList(res.data.forms)
    // console.log(res.data.forms)
   })
   .catch((err) => console.log(err));
    })
    return (
      <>
        {list.map((item) => {
          return (
            <div>
              <span>
                {item.name}
                {item.url}
                {item.content}
              </span>
            </div>
          );
        })}
      </>
    );
}
