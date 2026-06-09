import { ServicePreview } from '../components/ServicePreview'
import { rotatingNeeds, services } from '../data/siteContent'

export function ServicesSection() {
  return (
    <section className="services-section" id="servicos">
      <h2 className="need-rotator" aria-label="Você precisa de um site, sistema, dashboard, app ou portal? Nós temos a solução.">
        <span className="need-line">Você precisa de um</span>
        <span className="need-dynamic">
          <strong>
            <span className="need-word-track">
              {rotatingNeeds.map((need) => (
                <span key={need}>{need}</span>
              ))}
            </span>
          </strong>
        </span>
        <span className="need-line">Nós temos a solução.</span>
      </h2>

      <div className="service-grid">
        {services.map(({ icon: Icon, preview, title, text }) => (
          <article className={`service-card service-card-${preview}`} key={title}>
            <div className="service-card-top">
              <span className="card-icon">
                <Icon aria-hidden="true" />
              </span>
              <ServicePreview type={preview} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
