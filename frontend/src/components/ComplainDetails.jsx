import React, { useState } from "react";
import user from "../images/user2.png";
import help from "../images/help.png";
import { BsThreeDotsVertical } from "react-icons/bs";
const ComplainDetails = (props) => {
  const [dots, setDots] = useState(false);

  return (
    <div className="posts">
      <div className="post-card">
        <div className="name-image">
          <img className="avatar-user" src={user} alt="" />
          <span className="name-user">{props.data._id}</span>
          {dots === false ? (
            <BsThreeDotsVertical
              onClick={() => {
                setDots(!dots);
              }}
              className="threeDots"
            />
          ) : (
            <div
              onClick={() => {
                setDots(!dots);
              }}
              className="dots-block"
            >
              <ul>
                <li
                  onClick={() => {
                    props.delete(props.data._id);
                    window.location.reload();
                  }}
                >
                  
                  Delete
                </li>
                <li
                  onClick={() => {
                    props.update(props.data.id,props.body);
                  }}
                >
                  update
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="content-vote">
          <div className="post-content">{props.data.content}</div>
          <img
            className="help"
            alt=""
            src={help}
            onClick={() => {
              props.upVotes(props.data._id);
              window.location.reload();
            }}
          />
          <span className="votes">{props.data.upVote}</span>
        </div>
      </div>
    </div>
  );
};

export default ComplainDetails;
