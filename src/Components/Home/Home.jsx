import React from 'react'
import styled from "styled-components"
import Form from '../Form/Form';
import Table from "../Table/Table";

export default function Home() {

    const HOME = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    `;
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>WELCOME TO RSS FEED AGREGATOR</h1>
        <HOME>
          <div>
            <Form />
          </div>
          <div>
            <Table />
          </div>
        </HOME>
      </div>
    );
}
