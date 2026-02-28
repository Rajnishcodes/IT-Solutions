const API_BASE = "http://localhost:5000/api";

export const fetchJobs = async () => {
  const res = await fetch(`${API_BASE}/jobs`);
  return res.json();
};

export const submitApplication = async (data) => {
  const res = await fetch(`${API_BASE}/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
