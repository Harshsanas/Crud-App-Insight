import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

export default function Navbar() {
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

      .left-nav {
        margin-right: 200px;
        margin-top: 7px;

        .linkbtn {
          margin-right: 20px;
          text-decoration: none;
          color: black;
        }

        .linkbtn:hover {
          color: red;
          text-decoration: underline;
        }
      }
    `;

    return (
      <div>
        <NAVBAR>
          <div className="right-nav">
            <NavLink to="/" >
              <img src="logoiconsvg.png" alt="img" />
              <p>RSS FEED AGREGATOR</p>
            </NavLink>
          </div>
          <div className="left-nav">
            <NavLink to="/Form" className="linkbtn">Form</NavLink>
            <NavLink to="/Table" className="linkbtn" >Table</NavLink>
            <NavLink to="/List" className="linkbtn">List</NavLink>
          </div>
        </NAVBAR>
      </div>
    );
}
