import axios from "axios";
import React, { useState } from "react";

let Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

const log= (input)=>{
    input=JSON.stringify(input)
 axios
     .get(`http://localhost:4000/login/admin/${input}`)
     .then(async(res) => {
       
       await setData(res.data);
     });
console.log(input,'input');
console.log(data,'data');
}
const check =async()=>{
    if (data.length === 0) {
      console.log("fuckoff");
    } else {
      console.log("welcome");
    }
}
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
      <button onClick={async()=>{
        await log({
        name,
        password 
      })
      await check()
      await props.changeView('admin')
      }}> login</button>
    </div>
  );
};


export default Login;
