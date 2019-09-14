import React from "react";

const SkillCard = ({ title }) => {
  return (
    <div className="col-md-4">
      {/* <span className="fa-stack fa-4x">
        <i className="fa fa-circle fa-stack-2x text-primary"></i>
        <i className="fa fa-node"></i>
        <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
      </span> */}
      <h4 className="service-heading">{title}</h4>
      {/* <p className="text-muted">{description}</p> */}
      <p className="text-muted"></p>
    </div>
  );
};

export default SkillCard;
