import React from 'react'
import axios from 'axios'
const AdminVue = (props) => {
  
  
  return (
    <div>
      <button className='adddoc' onClick={()=>props.changeView('createdoctor')}> Recruit</button>
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
            <button  className='btndel' onClick={()=>{
                axios.delete(`http://localhost:4000/admin/${e.doctorname}`);
            }}> fire</button>
            <p>doctor name: <br />{e.doctorname}</p>

            
            <img className="doctorsimg" src={e.doctorimage} alt="doctorsimg" />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AdminVue