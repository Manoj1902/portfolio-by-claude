import { portfolioData } from "../../data/portfolioData";
import "./Home.css";

function Home() {
  return (
    <section className="page page-home">
      <div className="hero">
        <div className="hero-content">
          <p className="eyebrow">Full-Stack Interface Architect</p>
          <h1>{portfolioData.name}</h1>
          <h2>{portfolioData.role}</h2>
          <p className="tagline">{portfolioData.tagline}</p>
          <div className="hero-quick-stats">
            <div className="stat-item">
              <strong>{portfolioData.experience}</strong>
              <span>of experience</span>
            </div>
            <div className="stat-item">
              <strong>{portfolioData.skills.length}</strong>
              <span>core skills</span>
            </div>
            <div className="stat-item">
              <strong>30+</strong>
              <span>completed projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
