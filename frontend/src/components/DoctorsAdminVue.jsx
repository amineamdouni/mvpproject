import React from 'react'
import axios from 'axios'
const AdminVue = (props) => {
   
  
  return (
    <div>
      <button onClick={()=>props.changeView('createdoctor')}> click me</button>
      <ul className="doctors-list">
        {props.data.map((e, i) => (
          <div
            key={i}
            onClick={() => {
              props.changeData(e);
              props.changeView("");
            }}
            data={e}
            className="doctors-list-item"
          >
            <div>{e.doctorname}</div>

            <div>
              {e.patientslist.map((e, index) => {
                return (
                  <>
                    <p key={index}>{e}</p>
                  </>
                );
              })}
            </div>
            <img className="doctorsimg" src={e.doctorimage} alt="doctorsimg" />
            <button onClick={()=>{
                axios.delete(`http://localhost:4000/admin/${e.doctorname}`);
            }}> 🗑️</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AdminVue