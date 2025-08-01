import React, { useState } from "react";
import { Data } from "./Data";

const App = () => {
  const [store, setStore] = useState(Data);
  return (
    <div className="container">
      <h1 className="heading">Search Filter App</h1>

      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />

      <div className="card-wrapper">
        {store.map((cur, index) => (
          <div className="item-card" key={index}>
            <img src={cur.img} alt={cur.name} className="item-img" />
            <p className="item-name">{cur.name}</p>
            <p className="item-brand">{cur.brand}</p>
          </div>
        ))}
      </div>
    </div>

  );
};
export default App;