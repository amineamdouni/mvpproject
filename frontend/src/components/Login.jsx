import axios from "axios";
import React, { useState } from "react";

let Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const log = (input) => {
    input = JSON.stringify(input);

    axios
      .get(`http://localhost:4000/login/admin/${input}`)
      .then(async (res) => {
        await res.data;
        setData(res.data);
      });

    console.log(input, "input");
    console.log(data, "data");
  };
  const check = () => {
    if (data.length === 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          log({
            name,
            password,
          });
          if (check() === true) {
            props.changeView("doctorsadmin");
          }
        }}
      >
        login
      </button>
    </div>
  );
};

export default Login;
