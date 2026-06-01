import { Zap } from 'lucide-react'
import { painPoints } from '../data/siteContent'

export function PainSection() {
  return (
    <section className="pain-section" aria-labelledby="pain-heading">
      <div className="section-heading compact-heading">
        <div>
          <span className="section-kicker">
            <Zap size={18} />
            Onde dói
          </span>
          <h2 id="pain-heading">A tecnologia certa começa pelo problema certo.</h2>
        </div>
        <p>
          Antes de falar em ferramenta, entendemos onde a empresa está perdendo
          tempo, clareza ou oportunidade.
        </p>
      </div>

      <div className="pain-grid">
        {painPoints.map(({ icon: Icon, title, text }) => (
          <article className="pain-card" key={title}>
            <span className="card-icon">
              <Icon aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
