import React from 'react'
import styled from "styled-components"

export default function Home() {

    const HOME = styled.div`
      h1 {
        color: red;
      }
    `;
    return (
      <div>
        <HOME>
          <h1>WELCOME TO RSS FEED AGREGATOR</h1>
        </HOME>
      </div>
    );
}
