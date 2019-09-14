import React from "react";
import { Link } from "react-router-dom";

const PortFolioCard = ({ imageUrl, title, description, link }) => {
  return (
    <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" target="_blank" href={link}>
            <div className="portfolio-hover">
              <div className="portfolio-hover-content" />
            </div>
            <img className="img-fluid" src={imageUrl} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4><a href={link} target="_blank">{title}</a></h4>
            <p className="text-muted">{description}</p>
          </div>
        </div>
  );
};

export default PortFolioCard;
