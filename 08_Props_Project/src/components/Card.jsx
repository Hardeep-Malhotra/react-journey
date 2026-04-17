import React from "react";
import { Bookmark } from "lucide-react";

function Card({ job }) {
  return (
    <div className="card">
      {/* Top Part */}
      <div className="header-row">
        <div className="company-logo-circle">
          <img src={job.img} alt="google" />
        </div>
        <div className="saved-tag">
          <span>Saved</span>
          <Bookmark size={14} fill="black" />
        </div>
      </div>

      {/* Title Part */}
      <div className="job-info">
        <div className="job-meta">
          <strong>{job.company}</strong>
          <span>{job.posted}</span>
        </div>
        <h2 className="job-title">{job.role}</h2>
      </div>

      {/* Tags */}
      <div className="tag-container">
        <span className="pill">{job.type}</span>
        <span className="pill">{job.level}</span>
      </div>

      {/* Bottom Part */}
      <div className="card-footer">
        <div className="salary-loc">
          <h4>{job.salary}</h4>
          <p>{job.location}</p>
        </div>
        <button className="apply-now-btn">Apply now</button>
      </div>
    </div>
  );
}

export default Card;
