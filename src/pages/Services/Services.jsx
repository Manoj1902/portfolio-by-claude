import { portfolioData } from "../../data/portfolioData";
import "./Services.css";

function Services() {
  return (
    <section className="page page-services section visible">
      <h3>Services</h3>
      <div className="service-grid">
        {portfolioData.services.map((service, index) => (
          <div
            key={service.title}
            className="service-card"
            style={{ "--service-index": index }}
          >
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
