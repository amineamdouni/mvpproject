import React from "react";
import { useState } from "react";
import axios from "axios"

let AddDoctor = (props) => {
  const [score, setScore] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [patientsList, setPatientsList] = useState("");
  const [doctorname, setDoctorname] = useState("");
 
  const addDoctor=(doc)=>{
axios.post('http://localhost:4000/admin/doc',doc)
  }

  return (
    <div className="complaints-container">
      <div id="complain" className="form">
        <div className="header">AddDoctor</div>

        <div className="form-control">
          <label for="email" id="label-email">
            doctor name
          </label>
          <input
            type="email"
            onChange={(e) => {
              setDoctorname(e.target.value);
            }}
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-control">
          <label for="role" id="label-role">
            choose speciality:
          </label>

          <select
            name="role"
            id="role"
            onChange={(e) => {
              setSpeciality(e.target.value);
            }}
          >
            <option value="family Doctor">family Doctor</option>
            <option value="Neurologist">Neurologist</option>
            <option value="pediatrician">pediatrician</option>
            <option value="Internists">Internists</option>
            <option value="Emergency physicians">Emergency physicians</option>
            <option value="Psychiatrists">Psychiatrists</option>
            <option value="Obstetricians and gynecologists">Obstetricians and gynecologists</option>
            <option value="Radiologists">Radiologists</option>
          </select>
        </div>
        <div class="form-control">
          <label for="role" id="label-role">
            choose doctor score:
          </label>

          <select
            name="role"
            onChange={(e) => {
              setScore(e.target.value);
            }}
            id="role"
          >
            <option>100 </option>
            <option>75</option>
            <option>50</option>
            <option value="Racism/Sexism">25</option>

            <option value="Minor Abuse">0</option>
          </select>
          <div class="form-control">
            <label for="complain">image</label>

            <textarea
              onChange={(e) => {
                setPatientsList(e.target.value);
              }}
              name="comment"
              id="comment"
              className="text-field"
              placeholder="Enter patients  here"
            ></textarea>
          </div>

          <button
            id="submit"
            onClick={() => {
              addDoctor({
                doctorname,
                speciality,
                doctorimage: patientsList,
                score,
              });
              props.changeView("admin");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddDoctor;
