import React from 'react'
import styled from "styled-components"

export default function Form() {

  const FORM = styled.div`
    margin: 100px auto;
    border: 1px solid grey;
    width: 40vw;
    border-radius: 8px;
    box-shadow: 1px 1px 5px 5px lightgrey;
    

    h1 {
      text-align: center;
    }

    input {
      border-radius: 4px;
      cursor: pointer;
      border: 1px solid grey;
      height: 30px;
      width: 25vw;
      margin-left: 10px;
    }

    div {
      text-align: center;
      margin: 20px;
    }

    button {
      width: 120px;
      height: 35px;
      border-radius: 4px;
      border: 1px solid grey;
      cursor: pointer;
      font-size: 18px;
      font-weight: 500;
    }

    button:hover {
      color: grey;

      background-color: black;
    }
  `;
    return (
      <div>
        <FORM>
          <h1>ADD URL</h1>
          <form action="">
            <div>
              <span>Enter Feed Name</span>
              <input type="text" placeholder="Enter Name" />
            </div>
            <div>
              <span>Enter Feed URL</span>
              <input type="text" placeholder="Enter URL" />
            </div>
            <div>
            <button type="submit">ADD URL</button>
            </div>
          </form>
        </FORM>
      </div>
    );
}
