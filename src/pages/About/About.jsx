import { portfolioData } from "../../data/portfolioData";
import "./About.css";

function About() {
  return (
    <section className="page page-about section visible">
      <h3>About</h3>
      <p>{portfolioData.about}</p>
      <div className="profile-details">
        <span>Location: {portfolioData.location}</span>
        <span>Experience: {portfolioData.experience}</span>
        <span>Education: {portfolioData.education}</span>
      </div>
      <h4 className="subheading">What I bring to your team</h4>
      <ul className="highlight-list">
        <li>
          Scaled UI systems for high-traffic SaaS products with 2M+ daily users.
        </li>
        <li>Mentored developer team and established frontend QA pipelines.</li>
        <li>Integrated A/B testing and ROI-focused metrics to UI decisions.</li>
      </ul>
      <div className="skill-grid">
        {portfolioData.skills.map((skill, index) => (
          <span
            key={skill}
            className="skill"
            style={{ "--skill-index": index }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
