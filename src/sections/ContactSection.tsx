import { Plus, Zap } from 'lucide-react'
import { contactOptions } from '../data/siteContent'

export function ContactSection() {
  return (
    <section className="contact-section" id="contato">
      <div>
        <span className="section-kicker">
          <Zap size={18} />
          Próximo passo
        </span>
        <h2>Vamos criar a sua tecnologia?</h2>
        <p>
          Conte o que você precisa construir, automatizar ou melhorar. A gente
          organiza o caminho mais direto para chegar lá.
        </p>
      </div>
      <details className="contact-menu">
        <summary aria-label="Abrir opções de contato">
          <Plus size={34} strokeWidth={2.8} />
        </summary>
        <div className="contact-menu-items">
          {contactOptions.map(({ icon: Icon, image, label, href }) => (
            <a href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
              {image ? <img src={image} alt="" aria-hidden="true" /> : Icon ? <Icon aria-hidden="true" /> : null}
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </details>
    </section>
  )
}
