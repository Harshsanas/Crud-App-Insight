import React from 'react'
import styled from "styled-components"

export default function Form() {

  const FORM = styled.div`
    margin: 50px 20px;
    border: 1px solid grey;
    width: 35vw;
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
      padding: 5px;
    }

    table {
      margin: auto;

      tr {
        td {
          textarea {
            margin-top: 5px;
            width: 25vw;
            margin-left: 10px;
            height: 80px;
            border-radius: 4px;
            padding: 5px;
          }

          button {
            width: 120px;
            height: 35px;
            border-radius: 4px;
            border: 1px solid grey;
            cursor: pointer;
            margin: 10px 0px 20px 0px;
            font-size: 18px;
          }
        }
      }
    }

    button {
    }

    button:hover {
      color: grey;
      background-color: black;
    }
  `;
    return (
      <div>
        <FORM>
          <h1>ADD FEED DETAILS</h1>
          <form action="">
            <table>
              <tr>
                <td>
                  <p>Feed Name</p>
                </td>
                <td>
                  <input type="text" placeholder="Enter Name" id="feedname" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Feed URL</p>
                </td>
                <td>
                  <input type="text" placeholder="Enter URL" id="feedurl" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Feed Content</p>
                </td>
                <td>
                  <textarea
                    type="text"
                    placeholder="Enter Content"
                    id="feedcontent"
                  />
                </td>
              </tr>
              <tr>
                <td colspan="2" style={{textAlign: "center"}}>
                  <button type="submit">ADD URL</button>
                </td>
              </tr>
            </table>
          </form>
        </FORM>
      </div>
    );
}
