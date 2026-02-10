import { useState } from "react";
import { submitApplication } from "../services/api";

const ApplyModal = ({ job, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await submitApplication({ ...form, jobId: job.id });
    alert("Application submitted!");
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Apply for {job.title}</h2>

        <form onSubmit={submit}>
          <input
            placeholder="Full Name"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Resume URL"
            required
            onChange={(e) => setForm({ ...form, resume: e.target.value })}
          />

          <button className="apply-btn full">Submit</button>
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
