import { useState } from "react";

const CareerCard = ({ job, onApply }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="career-card">
      <div className="career-header">
        <div>
          <span className="tag">OPEN ROLES</span>
          <h3>{job.title}</h3>
          <p className="meta">
            {job.type} • {job.salary} • {job.location}
          </p>
        </div>

        <div className="actions">
          <button className="icon-btn" onClick={() => setOpen(!open)}>
            {open ? "−" : "+"}
          </button>
          <button className="apply-btn" onClick={() => onApply(job)}>
            Submit Application →
          </button>
        </div>
      </div>

      {open && (
        <div className="career-body">
          <p>{job.description}</p>
          <ul>
            {job.requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CareerCard;
