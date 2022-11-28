import React from "react";
import { useEffect, useState } from "react";
import AddDoctor from "./components/AddDoctor.jsx";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import quotes from "./images/quotes1.png";
import axios from "axios";
import Login from "./components/Login.jsx";
import "./index.css";
import AdminVue from "./components/AdminVue.jsx";


let App = () => {
  var [menu, setMenu] = useState(true);
  let [data, setData] = useState([]);
  const [view, setView] = useState("");
  const toggleData = (input) => {
    if (input === "patients") {
      axios
        .get("http://localhost:4000/admin/allPAt")
        .then((res) => setData(res.data));
    } else if (input === "doctors") {
      axios.get("http://localhost:4000/admin/alldoc").then((res) => {
        setData(res.data);
      });
    }
  };
  useEffect(() => {
    axios.get("http://localhost:4000/admin/alldoc").then((res) => {
      setData(res.data);
    });
  }, []);
  var toggleMenu = () => {
    if (menu === true) {
      return (
        <div className="navs">
          <div className="nav_menu" id="nav-menu">
            <div className="nav_close" id="nav-close">
              <AiOutlineClose />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav_menu show" id="nav-menu">
          <div className="nav_close" id="nav-close">
            <AiOutlineClose
              onClick={() => {
                setMenu(!menu);
              }}
            />
          </div>
          <ul className="nav_list">
            <li className="nav_item">
              <div href="#" className="nav_link"></div>
            </li>
            <li className="nav_item">
              <div href="#" className="nav_link"></div>
            </li>
            <li className="nav_item">
              <div href="#" className="nav_link"></div>
            </li>
            <li className="nav_item">
              <div href="#" className="nav_link"></div>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      <head>
        <title> </title>
      </head>
      {/* first navbar */}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div className="first_nav">
            <div className="consul-header">
              {" "}
              <img className="quote-header" src={quotes} alt="" /> Health&Care
            </div>
          </div>
          <div className="nav_toggle" id="nav-toggle">
            <AiOutlineMenu
              onClick={() => {
                setMenu(!menu);
              }}
            />
          </div>
          {toggleMenu()}
        </nav>
      </header>
      <main></main>
      {/* second navabar */}
      <header className="l-header2">
        <nav className="nav bd-grid2">
          <ul className="nav_list2">
            <li className="nav_item2">
              <div
                className="nav_link2"
                onClick={async () => {
                  toggleData("patients");
                  setView("patient");
                }}
              >
                patients
              </div>
            </li>
            <li className="nav_item2">
              <div
                className="nav_link2"
                onClick={async () => {
                  toggleData("doctors");
                  setView("doctors");
                }}
              >
                doctors{" "}
              </div>
            </li>

            <div class="wrap">
              <div class="search">
                <input type="text" class="searchTerm" placeholder="search" />
                <button type="submit" class="searchButton">
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
          </ul>
        </nav>
      </header>
      {/* Home page */}
      <div className="compain">
        
        <AdminVue data={data} />
      </div>
      <footer></footer>
    </div>
  );
};
// return(<Login/>)

export default App;