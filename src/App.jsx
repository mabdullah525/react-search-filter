import React from "react";
import { Data } from "./Data";

const Search = () => {
  const [store, setStore] = useState(Data);
  return <div className="container">
    <h1>Search Filter App</h1>
    <input type="text" placeholder="Search..." />
    {
      store.map((cur) => {
        return (
          <div className="iteam-list">
            <p>{cur.name}</p>

          </div>
        );
      })
    }
  </div>;
};
export default Search;