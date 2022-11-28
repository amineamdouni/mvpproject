import React from "react";
import ComplainDetails from "./ComplainDetails.jsx";

var HomeLeft = (props) => {
  return (
    <div className="card">
      {props.data.map((e, i) => (
        <ComplainDetails data={e} update={props.update} delete={props.deleteData} upVotes={props.upVotes} key={i} />
      ))}

     
    </div>
  );
};

export default HomeLeft;
