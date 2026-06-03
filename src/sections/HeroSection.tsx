import { ArrowRight, Sparkles } from 'lucide-react'
import { createWhatsAppLink, heroRotatingWords } from '../data/siteContent'
import heroImage from '../assets/monkeys-hero.png'

export function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-media" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>

      <div className="hero-content">
        <span className="eyebrow">
          <Sparkles size={18} />
          Monkeys Tecnologia
        </span>
        <h1>
          Tecnologia sem
          <span className="hero-word-rotator" aria-label="complicação, enrolação, dificuldade ou mistério">
            <span className="hero-word-track">
              {heroRotatingWords.map((word) => (
                <span key={word}>{word}</span>
              ))}
            </span>
          </span>
        </h1>
        <p>
          Criamos sites, sistemas, automações e soluções digitais para empresas
          que querem crescer com tecnologia clara, eficiente e sem mistério.
        </p>

        <div className="hero-actions">
          <a
            className="primary-action"
            href={createWhatsAppLink('Olá! Quero tirar uma ideia do papel com a Monkeys Tecnologia.')}
            target="_blank"
            rel="noreferrer"
          >
            Tirar uma ideia do papel
            <ArrowRight size={19} strokeWidth={2.5} />
          </a>
          <a className="secondary-action" href="#servicos">
            Ver soluções
          </a>
        </div>
      </div>
    </section>
  )
}
