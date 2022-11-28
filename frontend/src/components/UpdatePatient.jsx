import React,{useState} from 'react'
import axios from 'axios';

const UpdatePatient = (props) => {
    const[patientname,setPatientname]=useState('')
    const [state, setState] = useState("");
    const update =(name,state)=>{axios.put(`http://localhost:4000/admin/onePat/${name}`,{state});}
  return (
    <div className="complaints-container">
      <div id="complain" className="form">
        <div className="header">AddDoctor</div>

        <div className="form-control">
          <label for="email" id="label-email">
            patient name
          </label>
          <input
            onChange={(e) => setPatientname(e.target.value)}
            type="email"
            id="email"
            placeholder="Enter patient name"
          />
        </div>

        <div className="form-control">
          <label for="role" id="label-role">
            choose state:
          </label>

          <select
            name="role"
            id="role"
            onChange={(e) => setState(e.target.value)}
          >
            <option value="waiting for lab result ">
              waiting for lab result{" "}
            </option>

            <option value="urgent">urgent</option>
            <option value="primary case">primary case</option>
            <option value="long term care">long term care</option>
            <option value="special case">special case</option>
            <option value="Emergency physicians">Emergency physicians</option>
            <option value="mental health care">mental health care</option>
            <option value="hospice care">hospice care</option>
          </select>
        </div>
        <div class="form-control">
          <button onClick={() => update(patientname, state)}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default UpdatePatient