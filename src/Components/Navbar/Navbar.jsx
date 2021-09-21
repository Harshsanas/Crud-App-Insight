import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const NAVBAR = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 30px;
  }

  .right-nav {
    float: left;
    p {
      float: right;
      margin-top: 5px;
      margin-left: 10px;
      color: black;
    }
  }
`;

export default function Navbar() {
    
    return (
      <div>
        <NAVBAR>
          <div className="right-nav">
            <NavLink to="/" >
              <img src="logoiconsvg.png" alt="img" />
              <p>RSS FEED AGREGATOR</p>
            </NavLink>
          </div>
        </NAVBAR>
      </div>
    );
}
