import { portfolioData } from "../../data/portfolioData";
import "./Projects.css";

function Projects() {
  return (
    <section className="page page-projects section visible">
      <h3>Featured Work</h3>
      <div className="project-grid">
        {portfolioData.projects.map((project, index) => (
          <article
            key={project.title}
            className="project-card"
            style={{ "--card-index": index }}
          >
            <div className="project-pin">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={`${project.title}-${tag}`} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
