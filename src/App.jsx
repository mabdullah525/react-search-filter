import React, { useState } from "react";
import { Data } from "./Data";

const App = () => {
  const [store, setStore] = useState(Data);
  const [data, setData] = useState("");

  const getData = (e) => {
    setData(e.target.value);
  }
  store.filter((cur) => {

  })
  return (
    <div className="container">
      <h1 className="heading">Search Filter App</h1>

      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        onChange={getData}
      />

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th className="table-head">Name</th>
              <th className="table-head">Brand</th>
              <th className="table-head">Image</th>
            </tr>
          </thead>
          <tbody>
            {store.map((cur, index) => (
              <tr key={index} className="table-row">
                <td className="table-data">{cur.name}</td>
                <td className="table-data">{cur.brand}</td>
                <td className="table-data">
                  <img src={cur.img} alt={cur.name} className="table-img" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
};
export default App;