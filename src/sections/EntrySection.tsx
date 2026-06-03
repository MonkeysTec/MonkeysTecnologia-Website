import { ArrowRight, Rocket } from 'lucide-react'
import { createWhatsAppLink, entryPaths } from '../data/siteContent'

export function EntrySection() {
  return (
    <section className="entry-section" id="caminhos" aria-labelledby="entry-heading">
      <div className="section-heading">
        <div>
          <span className="section-kicker">
            <Rocket size={18} />
            Caminhos de entrada
          </span>
          <h2 id="entry-heading">Escolha por onde faz mais sentido começar.</h2>
        </div>
        <p>
          Cada projeto pode começar pequeno, validando valor antes de ampliar
          escopo, integrações e automações.
        </p>
      </div>

      <div className="entry-grid">
        {entryPaths.map(({ title, label, text, whatsappMessage }) => (
          <article className="entry-card" key={title}>
            <span>{title}</span>
            <h3>{label}</h3>
            <p>{text}</p>
            <a
              href={createWhatsAppLink(whatsappMessage)}
              aria-label={`Conversar sobre ${label}`}
              target="_blank"
              rel="noreferrer"
            >
              Conversar
              <ArrowRight size={17} strokeWidth={2.5} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
