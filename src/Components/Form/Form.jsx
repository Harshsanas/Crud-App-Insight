import axios from 'axios';
import React, { useState } from 'react'
import styled from "styled-components"

export default function Form() {
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

  // const [url,setUrl]=useState()
  // const [name,setName]=useState()
  // const [content, setContent]=useState()
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

  const handleSubmit =(e)=>{
    e.preventDefault();
    alert("working");
    console.log(form)

    axios
      .post("http://localhost:3033/form",form)
      .then((res) => {
        console.log(form)
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
              value={form.name}
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
            <button type="submit">ADD URL</button>
          </form>
        </FORMDATA>
      </div>
    );
}
