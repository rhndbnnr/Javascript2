import React from "react";
import Columns from "./Columns";
import HeaderColumns from "./HeaderColumns";

function Table() {
  return (
    <>
      '
      <table>
        <thead>
          <tr>
            <HeaderColumns />
          </tr>
        </thead>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
