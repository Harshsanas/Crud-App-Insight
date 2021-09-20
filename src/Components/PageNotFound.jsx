import React from 'react'
import styled from "styled-components"
export default function PageNotFound() {

    const PAGE=styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    background-color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    height: 100vh;
    `
    return (
      <div>
        <PAGE>404 PAGE NOT FOUND</PAGE>
      </div>
    );
}
