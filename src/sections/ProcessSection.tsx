import { CheckCircle2, Cpu } from 'lucide-react'
import { processSteps } from '../data/siteContent'

export function ProcessSection() {
  return (
    <section className="process-section" id="processo">
      <div className="process-copy">
        <span className="section-kicker">
          <Cpu size={18} />
          Método
        </span>
        <h2>Menos ruído, mais entrega.</h2>
        <p>
          Traduzimos necessidades de negócio em entregas técnicas organizadas,
          com prioridade no que gera valor agora e estrutura para o que vem
          depois.
        </p>
      </div>

      <ol className="process-list">
        {processSteps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
            <CheckCircle2 aria-hidden="true" />
          </li>
        ))}
      </ol>
    </section>
  )
}
