import React from "react";
import "./Service.css";
import { services } from "../../data";
import ServiceCard from "../../ui/ServiceCard";
function Service() {
  return (
    <section id="service">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Service</h2>
        </div>
        <div className="service__group">
          {services.map(
            ({ title, description, icon, color, colorRGB }, index) => (
              <ServiceCard 
              title={title}
              description={description}
              icon={icon}
              color={color}
              colorRGB={colorRGB}
              key={index} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Service;
