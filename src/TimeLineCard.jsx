import React from "react";

const TimeLineCard = ({ imageUrl, year, heading, description, className = null }) => {
  return (
    <li className={className}>
    <div className="timeline-image">
      <img className="rounded-circle img-fluid" src={ imageUrl } alt="" />
    </div>
    <div className="timeline-panel">
      <div className="timeline-heading">
        <h4>{ year }</h4>
        <h4 className="subheading">{ heading }</h4>
      </div>
      <div className="timeline-body">
        <p className="text-muted">{ description }</p>
      </div>
    </div>
  </li>
  );
};

export default TimeLineCard;
