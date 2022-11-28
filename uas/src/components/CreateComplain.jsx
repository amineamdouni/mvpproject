import React from "react";
import { useState } from "react";

let CreatComplain = (props) => {
  const [topic, setTopic] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  console.log(email);

  return (
    <div className="complaints-container">
      <div id="complain" className="form">
        <div className="header">CreatComplain</div>

        <div className="form-control">
          <label for="email" id="label-email">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-control">
          <label for="role" id="label-role">
            choose your government:
          </label>

          <select
            name="role"
            id="role"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            <option value="Tunis">Tunis</option>
            <option value="Ariana">Ariana</option>
            <option value="Ben arous">Ben arous</option>
            <option value="Manouba">Manouba</option>
            <option value="Kairouan">Kairouan</option>
            <option value="Bizerte">Bizerte</option>
            <option value="Sousse">Sousse</option>
            <option value="Monastir">Monastir</option>
            <option value="Mahdia">Mahdia</option>
            <option value="Nabeul">Nabeul</option>
            <option value="Kef">Kef</option>
            <option value="Kasserine">Kasserine</option>
            <option value="Béja">Béja</option>
            <option value="Jendouba">Jendouba</option>
            <option value="Médenine">Médenine</option>
            <option value="Gabès">Gabès</option>
            <option value="Gafsa">Gafsa</option>
            <option value="Kébili">Kébili</option>
            <option value="Sfax">Sfax</option>
            <option value="Sidi Bouzid">Sidi Bouzid</option>
            <option value="Siliana">Siliana</option>
            <option value="Tozeur">Tozeur</option>
            <option value="Tataouine">Tataouine</option>
            <option value="Zaghouan">Zaghouan</option>
          </select>
        </div>
        <div class="form-control">
          <label for="role" id="label-role">
            choose your complain:
          </label>

          <select
            name="role"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
            id="role"
          >
            <option value="Domestic Violence">Domestic Violence </option>
            <option value="Sexual Violence">Sexual Violence</option>
            <option value="harassment and stalking">
              harassment and stalking
            </option>
            <option value="Racism/Sexism">Racism/Sexism</option>

            <option value="Minor Abuse">Minor Abuse</option>
            <option value="Anti-Establishment">Anti-Establishment</option>
          </select>
          <div class="form-control">
            <label for="complain">your complaints</label>

            <textarea
              onChange={(e) => {
                setContent(e.target.value);
              }}
              name="comment"
              id="comment"
              className="text-field"
              placeholder="Enter your complaint here"
            ></textarea>
          </div>

          <button
            id="submit"
            onClick={() => {
              props.addComplain({
                email: email,
                placement: location,
                topic: topic,
                content: content,
              });
              props.changeView("");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreatComplain;
