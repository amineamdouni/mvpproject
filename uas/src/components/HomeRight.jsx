import React, { useState, useEffect } from "react";
import allone from "../images/allOne.png";
var HomeRight = (props) => {
 
  var [counter, setCounter] = useState(0);
  var [counter2, setCounter2] = useState(0);
  var func1 = () => {
    var timer;
    timer = setTimeout(() => {
      
      var b = counter2+1
      
      setCounter2(b);
    }, 0.1);
    if ( counter2 === 1766) {
      clearTimeout(timer);
    }
  };
  var func = () => {
    var timer;
    timer = setTimeout(() => {
      var c = counter + 1;
      
      setCounter(c);
      
    }, 0.1);
    if (counter === 7588) {
      clearTimeout(timer);
    }
  };



const Topics = [
  "Bullying",
  "Racism/Sexism",
  "Sexual Violence",
  "Domestic Violence ",
  "rape","harrassment","Violence"
];

      return (
      <div>
       
        <button className='btn-copmlain' onClick={()=>{

        props.changeView('create')
        console.log('create');
           }}>Create Complain</button>
      <div className="line"></div>
      <div>
        <img className="image-right" src={allone} alt="" />
        <div className="line"></div>
        <div className="hashtags">
          {Topics.map((e, i) => (
            <button
              onClick={() => {
                props.getAllTopics(e);
              }}
            >
              #{e}
            </button>
          ))}
</div>
          <div className="wrappers">
            <div className="container">
              <span className="num" data-val="400">
                {counter}
                {func()}
              </span>
              <span className="text">women abuse</span>
            </div>
          </div>
          <div className="wrappers">
            <div className="container">
              <span className="num" data-val="400">
                {counter2}
                {func1()}
              </span>
              <span className="text">child abuse</span>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default HomeRight;
