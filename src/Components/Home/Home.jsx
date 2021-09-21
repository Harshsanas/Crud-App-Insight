import React from 'react'
import styled from "styled-components"
import Form from '../Form/Form';
import Table from "../Table/Table";

    const HOME = styled.div`
      display: flex;
    `;

export default function Home() {
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
