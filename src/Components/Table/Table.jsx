
import styled from 'styled-components'
import React from 'react'
import List from '../List/List';

export default function Table() {
  const TABLEDATA = styled.div`
    margin-top: 45px;
    width: 40vw;
    h2 {
      text-align: center;
    }

    table {
      border: 1px solid grey;
      width: 100%;

      th {
        width: 100%;
        td {
        }
      }
    }
  `;
    return (
      <div>
        <TABLEDATA>
          <h2>URL TABLE LIST ITEM</h2>

          <table>
          <th>
          <td>ID</td>
          <td>NAME</td>
          <td>URL</td>
          <td>CONTENT</td>
          </th>
          </table>

          <List/>
        </TABLEDATA>
      </div>
    );
}
