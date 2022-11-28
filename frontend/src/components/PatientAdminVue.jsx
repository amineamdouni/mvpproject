import axios from "axios";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const PatientAdminVue = (props) => {
  const [dots, setDots] = useState(false);
  const Discharge=(name)=>{
axios.delete(`http://localhost:4000/admin/onePat/${name}`);
  }
  console.log(props.data);
  return (
    <div className="">
      {props.data.map((e, i) => (
        <div className="posts patientdet">
          <div className="post-card">
            <div className="name-image">
              <span className="name-user">
                Patient Name : <br />
                {e.patientname}
              </span>
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
                    <li onClick={()=>{Discharge(e.patientname)}}>Discharge</li>
                    <li>update patient state</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="content-vote">
              <div className="post-content">
                Patient State: <br />
                {e.state}
              </div>
              
              <div className="post-content">
                Patient doctorname: <br />
                {e.doctorname}
              </div>
              <div className="post-content">
                case: <br />
                {e.case}
              </div>
              <img src={e.patientimage} alt="patient" className="patientimg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientAdminVue;
