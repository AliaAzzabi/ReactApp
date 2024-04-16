import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';


const ChartCard = ({ chartId, title, content }) => { // Ajoutez la prop content
  const customCardStyles = {
    marginBottom: '20px',
    marginLeft: '20px',
    marginRight: '30px',// Ajout de la marge à gauche
};
  return (
    
    <div className="col-md-12">
      <div className="card card-box" style={customCardStyles}>
        <div className="card-head">
          <header>{title}</header>
          
        </div>
        <div className="card-body no-padding height-9">
          {content} {/* Affichez le contenu ici */}
          <div className="recent-report__chart">
            <div id={chartId}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
