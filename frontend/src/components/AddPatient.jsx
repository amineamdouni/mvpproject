import React from "react";
import { useState } from "react";
import axios from "axios";

let AddPatient = (props) => {
  const [patientname, setPatientname] = useState("");
  const [state, setState] = useState("");
  const [cases, setCase] = useState("");
  const [doctorname, setDoctorname] = useState("");
  const [patientimage, setPatientimage] = useState("");

  const addPatient = (doc) => {
    axios.post("http://localhost:4000/admin/pat", doc);
  };

  return (
    <div className="complaints-container">
      <div id="complain" className="form">
        <div className="header">Add Patient</div>

        <div className="form-control">
          <label for="email" id="label-email">
            Patient name
          </label>
          <input
            type="email"
            onChange={(e) => {
              setPatientname(e.target.value);
            }}
            id="email"
            placeholder="Enter Patient name"
          />
        </div>
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
            placeholder="Enter Patient name"
          />
        </div>
        <div className="form-control">
          <label for="role" id="label-role">
            choose state:
          </label>

          <select
            name="role"
            id="role"
            onChange={(e) => {
              setState(e.target.value);
            }}
          >
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
          <label for="role" id="label-role">
            choose patien case:
          </label>

          <textarea
            onChange={(e) => {
              setCase(e.target.value);
            }}
            name="comment"
            id="comment"
            className="text-field"
            placeholder="Enter image  here"
          ></textarea>
          <div class="form-control">
            <label for="complain">image</label>

            <textarea
              onChange={(e) => {
                setPatientimage(e.target.value);
              }}
              name="comment"
              id="comment"
              className="text-field"
              placeholder="Enter image  here"
            ></textarea>
          </div>

          <button
            id="submit"
            onClick={() => {
              addPatient({
                doctorname,
                state,
                patientimage,
                case: cases,
                patientname,
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
export default AddPatient;
