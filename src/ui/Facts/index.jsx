import ReactOdometer from "react-odometerjs";
import "./Facts.css";
import "odometer/themes/odometer-theme-default.css"
import { useEffect, useState } from "react";

export default function Facts() {
    const [experience,setExperience]=useState(0);
    const [project,setProject]=useState(0);
    const [client,setClient]=useState(0)

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setExperience(10);
            setProject(150);
            setClient(2.5)
        },3000);
        return ()=> clearTimeout(timeoutId);
    })
  return (
    <div className="flex__center fact__container">
      <div className="fact__item">
        <div className="flex__center">
            <ReactOdometer value={experience} className="title"/>
          <h3 className="title">+</h3>
        </div>
        <p className="label"> Year of Experience</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
            <ReactOdometer value={project} className="title"/>
          <h3 className="title">+</h3>
        </div>
        <p className="label"> Completed Project</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
            <ReactOdometer value={client} className="title"/>
          <h3 className="title">+</h3>
        </div>
        <p className="label"> Satisfied Clients</p>
      </div>

    </div>



  );
}
