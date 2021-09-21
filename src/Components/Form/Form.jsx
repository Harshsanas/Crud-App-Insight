import axios from 'axios';
import React, { useState } from 'react'
import styled from "styled-components"

  const FORMDATA = styled.div`
    margin: 50px 20px;

    input {
      border-radius: 4px;
      cursor: pointer;
      border: 1px solid grey;
      height: 25px;
      width: 25vw;
    }

    button {
      width: 120px;
      height: 35px;
      border-radius: 4px;
      border: 1px solid grey;
      cursor: pointer;
      margin: 10px 0px 20px 0px;
      font-size: 18px;
    }

    button:hover {
      color: grey;
      background-color: black;
    }
  `;

export default function Form() {

  const[form,setForm]=useState({})

  console.log(form)

  const handleChange=(e)=>{
    const {name,value}=e.target;
    let payload = {
      ...form,
      [name]: value,
    }
    setForm(payload);
  }

  // const obj={
  //  name:"Harshit",
  //  url:"hari@gmail.com",
  //  content:"Portfolio" 
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)

    axios
      .post("http://localhost:3033/form",form)
      .then((res) => {
        // console.log(form)
        console.log(res)
      })
      .catch((err) => console.log(err))

  }
    return (
      <div>
        <FORMDATA>
          <h2>ADD FEED DETAILS</h2>
          <form onSubmit={handleSubmit}>
            <p>Feed Name</p>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={handleChange}
            />
            <p>Feed URL</p>
            <input
              type="text"
              placeholder="Enter URL"
              name="url"
              onChange={handleChange}
            />
            <p>Feed Content</p>
            <input
              type="text"
              placeholder="Enter Content"
              name="content"
              onChange={handleChange}
            />
            <br />
            <button>ADD URL</button>
          </form>
        </FORMDATA>
      </div>
    );
}
