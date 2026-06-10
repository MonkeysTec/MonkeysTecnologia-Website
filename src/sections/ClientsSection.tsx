import type { CSSProperties } from 'react'
import { clientLogos } from '../data/siteContent'

const monkeyConstellation = new URL('../assets/monkey-semfundo2.png', import.meta.url).href
const logoStepDuration = 1600

export function ClientsSection() {
  function getLogoClassName(label: string) {
    const slug = label
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    const fitClassName =
      slug.includes('check-logo') || slug.includes('sales-sense') || slug.includes('tazzi')
        ? ' client-feature-logo--fit-icon'
        : slug.includes('dottas') || slug.includes('donethink') || slug.includes('siglo')
          ? ' client-feature-logo--fit-wide'
          : slug.includes('lanlink') || slug.includes('mobi-plus') || slug.includes('sb-labs')
            ? ' client-feature-logo--fit-ultrawide'
            : slug.includes('power2go') || slug.includes('portal-idea')
              ? ' client-feature-logo--fit-compact'
              : ''

    return `client-feature-logo client-feature-logo--${slug}${fitClassName}`
  }

  return (
    <section className="clients-section reveal" id="clientes">
      <h2 className="clients-title">Nossos Clientes</h2>
      <div
        className="client-logo-showcase is-open"
        style={{ '--logo-sequence-duration': `${Math.ceil(clientLogos.length / 2) * logoStepDuration}ms` } as CSSProperties}
      >
        <img
          className="client-constellation-scene"
          src={monkeyConstellation}
          alt=""
          aria-hidden="true"
        />
        <div className="client-logo-grid" aria-label="Logos de clientes">
          {clientLogos.map(({ image }, index) => (
            <div
              className="client-logo-card"
              key={image}
              style={{ '--logo-delay': `${Math.floor(index / 2) * logoStepDuration}ms` } as CSSProperties}
              aria-hidden="true"
            />
          ))}
        </div>
        {(['left', 'right'] as const).map((side) => (
          <div
            className={`client-feature-screen client-feature-screen--${side}`}
            aria-hidden="true"
            key={`screen-${side}`}
          >
            {clientLogos.map(({ image, label }, index) => {
              const isRightScreen = index % 2 === 1
              if ((side === 'right') !== isRightScreen) return null

              return (
                <img
                  className={getLogoClassName(label)}
                  src={image}
                  alt=""
                  key={`${label}-${image}`}
                  style={{ '--logo-delay': `${Math.floor(index / 2) * logoStepDuration}ms` } as CSSProperties}
                />
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
