import React from "react";

const PortFolioCard = ({ imageUrl, title, description, link }) => {
  return (
    <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" href={link}>
            <div className="portfolio-hover">
              <div className="portfolio-hover-content" />
            </div>
            <img className="img-fluid" src={imageUrl} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4><a href={link} >{title}</a></h4>
            <p className="text-muted">{description}</p>
          </div>
        </div>
  );
};

export default PortFolioCard;
