import React from 'react'
import styled from "styled-components"
import Form from '../Form/Form';
import Table from "../Table/Table";

export default function Home() {

    const HOME = styled.div`
    display: flex;
    `;
    return (
      <div>
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
