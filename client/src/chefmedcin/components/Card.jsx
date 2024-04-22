import React from "react";
import './style.css';

const CustomCard = ({ titre, number, progress, description, color, icon }) => {
  const cardClassName = `card ${color}`;

  return (
    
    <div className={cardClassName}>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <div className="info-box-icon">
              <i className="icons">{icon}</i>
            </div>
         
          
            <div className="info-box-content">
              <div className="info-box-text text-white">{titre}</div>
              <div className="info-box-number text-white">{number}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="progress-description text-white">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
