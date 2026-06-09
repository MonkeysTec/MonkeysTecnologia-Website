import { useState } from 'react'
import { Plus, UsersRound, X } from 'lucide-react'
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
      <section className="contact-section" id="sobre-nos">
        <div className="about-copy">
          <span className="section-kicker">
            <UsersRound size={18} />
            Sobre nós
          </span>
          <h2>Equipe para criar software sob medida.</h2>
          <p>
            Somos uma empresa de desenvolvimento de software dedicada a simplificar o ciclo de vida de aplicações web,
            mobile e baseadas em APIs. Nossa equipe de especialistas inclui desenvolvedores front-end e back-end,
            engenheiros mobile, gerentes de produto, designers de produto, especialistas em UI/UX, scrum masters,
            engenheiros de DevOps, analistas de dados e líderes técnicos, todos trabalhando juntos para entregar
            soluções digitais personalizadas.
          </p>
          <p>
            Dedicamos tempo para compreender verdadeiramente os desafios de nossos clientes, transformando-os em
            resultados práticos, rápidos e eficazes. Com uma abordagem flexível e colaborativa, os clientes podem moldar
            ativamente o foco do desenvolvimento a cada semana, seja alocando 100% da equipe para design em uma semana
            e, na seguinte, 70% para back-end e 30% para front-end. Esse modelo garante transparência, adaptabilidade e
            total alinhamento com as prioridades em constante evolução de cada cliente.
          </p>
        </div>
        <details className="contact-menu">
          <summary aria-label="Abrir perfis da equipe">
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
