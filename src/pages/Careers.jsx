import { useEffect, useState, useCallback } from "react";
import CareerCard from "../components/CareerCard";
import ApplyModal from "../components/ApplyModal";
import { fetchJobs } from "../services/api";
import "../styles/Careers.css";
import BackgroundVideo from "../assets/backgroundVideo.mp4";

const JOBS_PER_PAGE = 3;

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs().then((data) => {
      setJobs(data);
      setLoading(false);
    });
  }, []);

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = jobs.slice(startIndex, startIndex + JOBS_PER_PAGE);

  /* ✅ Keyboard Navigation */
  const handleKey = useCallback(
    (e) => {
      if (e.key === "ArrowRight" && currentPage < totalPages) {
        setCurrentPage((p) => p + 1);
      }
      if (e.key === "ArrowLeft" && currentPage > 1) {
        setCurrentPage((p) => p - 1);
      }
    },
    [currentPage, totalPages]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div className="careers-wrapper">
      {/* ===== HERO ===== */}
      <header className="careers-hero">
        <video autoPlay loop muted playsInline className="careers-video">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="careers-hero-content">
          <h1>Careers</h1>
          <p>
            We’re building products that matter and we’re looking for people who want to grow, 
            experiment, and make an impact.

            Whether you're an engineer, designer, product thinker, or AI specialist, 
            there’s a place for you here.

          </p>
        </div>
      </header>

      {/* ===== CONTENT ===== */}
      <div className="careers-page">
        <aside className="sidebar">
          <h2>Our Open Roles</h2>
          <p>
            We’re hiring across engineering, design, product, and AI.
            <br />
            <a href="mailto:itsolutions@gmial.com">itsolutions@gmail.com</a>
          </p>
        </aside>

        {/* ✅ REQUIRED CONTENT WRAPPER */}
        <main className="content">
          {/* ===== LOADING SKELETON ===== */}
          {loading
            ? Array.from({ length: JOBS_PER_PAGE }).map((_, i) => (
                <div key={i} className="skeleton-card" />
              ))
            : currentJobs.map((job) => (
                <CareerCard key={job.id} job={job} onApply={setSelected} />
              ))}

          {/* ===== PAGINATION ===== */}
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              ← Prev
            </button>

            {/* ✅ Collapsed Numbers on Mobile */}
            {Array.from({ length: totalPages }, (_, i) => {
              if (
                window.innerWidth < 600 &&
                Math.abs(currentPage - (i + 1)) > 1
              )
                return null;

              return (
                <button
                  key={i}
                  className={currentPage === i + 1 ? "active" : ""}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              );
            })}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next →
            </button>
          </div>
        </main>
      </div>

      {selected && (
        <ApplyModal job={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Careers;     
