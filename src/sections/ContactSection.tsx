import { useState } from 'react'
import { Plus, X, Zap } from 'lucide-react'
import alyssonPhoto from '../assets/imgalys.jpeg'
import alyssonSignature from '../assets/alyssysign.png'
import maxwellPhoto from '../assets/imgpnd.jpeg'
import maxwellSignature from '../assets/maxsign.png'

const founders = [
  {
    name: 'Maxwell Siqueira',
    signatureClassName: 'founder-signature--maxwell',
    photo: maxwellPhoto,
    signature: maxwellSignature,
    bio: 'Entusiasta de tecnologia de 34 anos e desenvolvedor de software experiente, com mais de 14 anos de experiência na criação de soluções digitais em diversas plataformas. Fundador da Monkeys Tecnologia no Brasil e atualmente à frente da doneThink, uma empresa de tecnologia inovadora com sede na Estônia. Com profundo conhecimento em desenvolvimento full-stack e design de produto, o CEO também atuou como líder técnico e gerente de engenharia, guiando com sucesso equipes multifuncionais em desafios complexos. Sua experiência inclui trabalho prático com sistemas embarcados, aplicativos móveis e plataformas web, sempre combinando excelência técnica com uma mentalidade orientada a produto. Impulsionado pela inovação e simplicidade, ele se dedica a transformar problemas complexos em soluções elegantes, escaláveis e impactantes.',
  },
  {
    name: 'Alysson Sene',
    signatureClassName: 'founder-signature--alysson',
    photo: alyssonPhoto,
    signature: alyssonSignature,
    bio: 'Cofundador da doneThink e desenvolvedor de software com sólida experiência na criação de soluções digitais focadas em aprimorar a experiência do usuário. Desde 2018, atua na área de tecnologia, com forte presença em ambientes ágeis, dinâmicos e colaborativos. Aos 30 anos, combina atenção aos detalhes, senso estético e visão estratégica com as melhores práticas de desenvolvimento para entregar produtos funcionais, escaláveis e bem projetados. Ambiciona alcançar posições de liderança técnica, contribuindo para o desenvolvimento de novos talentos e ajudando a construir soluções escaláveis, elegantes e com propósito.',
  },
]

export function ContactSection() {
  const [selectedFounder, setSelectedFounder] = useState<(typeof founders)[number] | null>(null)

  return (
    <>
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
          <summary aria-label="Abrir perfis dos fundadores">
            <Plus size={34} strokeWidth={2.8} />
          </summary>
          <div className="contact-menu-items">
            {founders.map((founder) => (
              <button type="button" key={founder.name} onClick={() => setSelectedFounder(founder)}>
                <img src={founder.photo} alt="" aria-hidden="true" />
                <span className="sr-only">Ver apresentação de {founder.name}</span>
              </button>
            ))}
          </div>
        </details>
      </section>

      {selectedFounder ? (
        <div className="founder-modal-backdrop" role="presentation" onClick={() => setSelectedFounder(null)}>
          <section
            className="founder-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="founder-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="founder-modal-close"
              type="button"
              aria-label="Fechar apresentação"
              onClick={() => setSelectedFounder(null)}
            >
              <X size={22} strokeWidth={2.4} />
            </button>
            <img className="founder-modal-photo" src={selectedFounder.photo} alt={selectedFounder.name} />
            <div className="founder-modal-copy">
              <p>{selectedFounder.bio}</p>
              <div className={`founder-signature ${selectedFounder.signatureClassName}`}>
                <h3 id="founder-modal-title">{selectedFounder.name}</h3>
                <img src={selectedFounder.signature} alt={`Assinatura de ${selectedFounder.name}`} />
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  )
}
