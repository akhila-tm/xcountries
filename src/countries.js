import { useEffect, useState } from "react";
import './countries.css';

function Countries(){
const [data,setData]=useState([])
useEffect(()=>{
    fetch('https://xcountries-backend.azurewebsites.net/all')
    .then((respose)=>respose.json())
    .then((res)=>{
        setData(res)
    }).catch((error)=>{console.error("Error fetching data:",error)})
},[])
  return (
    <div className="mainDiv">
    <div className="flagArrangement">
      {data.map((flag,index) => (
        <div className="flagBox" key={index}>
          <img src={flag.flag} alt={flag.name} />
          <div className="flagName">{flag.name}</div>
        </div>
      ))}
      </div>
    </div>
  );
}
export default Countries;