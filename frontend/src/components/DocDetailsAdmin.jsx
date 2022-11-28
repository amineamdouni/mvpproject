import React from 'react'

const DocDetailsAdmin = (props) => {
    console.log(props.data);
  return (
   <div>
    <h1>{props.data.patientname}</h1>

   </div>
  )
}

export default DocDetailsAdmin