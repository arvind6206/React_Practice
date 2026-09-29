import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );

        const user = res.data.find((u) =>
          u.name.toLowerCase().includes(search.toLowerCase()),
        );

        if (user) {
          setResult("User found");
        } else {
          setResult("User Not found");
        }
      } catch (error) {
        console.error(error);
      }
    };
      fetchUsers();

  }, [search]);

  return (
    <div>
      <h1>Search Users</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter the name"
      />
      <button>Search</button>
      <br />
      <br />
      <br />
      <p>{result}</p>
    </div>
  );
};

export default App;
