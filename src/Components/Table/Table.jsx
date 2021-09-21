
import styled from 'styled-components'
import React from 'react'
import List from '../List/List';

  const TABLEDATA = styled.div`
    margin-top: 45px;
    h2 {
      text-align: center;
    }
  `;

export default function Table() {
    return (
      <div>
        <TABLEDATA>
          <h2>URL TABLE LIST ITEM</h2>
          <List/>
        </TABLEDATA>
      </div>
    );
}
