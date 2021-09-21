import React,{useEffect,useState} from 'react'
import axios from 'axios'
import styled from "styled-components"

const TABLELIST = styled.div`
  span {
    display: grid;
    grid-template-columns: 20vw 20vw 20vw;
    text-align: center;
  }
  margin-left: 100px;
  div {
    display: grid;
    padding-bottom: 2px;
    grid-template-columns: 20vw 20vw 22vw;
    text-align: center;
    border: 1px solid lightgrey;
  }

  div:hover {
    background-color: lightgrey;
    cursor: pointer;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

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
        <TABLELIST>
          <span>
            <h3>NAME</h3>
            <h3>URL</h3>
            <h3>CONTENT</h3>
          </span>
          {list.length > 0 &&
            list?.map((item) => {
              return (
                <div key={item._id}>
                  <p>{item.name}</p>
                  <p>
                    <a href={item.url}>{item.url}</a>
                  </p>
                  <p>{item.content}</p>
                </div>
              );
            })}
        </TABLELIST>
      </>
    );
}
