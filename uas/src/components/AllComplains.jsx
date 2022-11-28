import React from "react";
import ComplainDetails from "./ComplainDetails.jsx"

const AllComplains = (props) => {
  
    console.log(props.data)
    
   return ( 
     <> 
   {props.data.map((e,i)=>(
     

     <ComplainDetails data={e} changeView={props.changeView} delete={props.delete} update={props.update} key={i} />

    
   ))}
    </>
 
  )};


export default AllComplains ;