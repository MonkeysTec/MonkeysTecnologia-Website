import { useState } from 'react'
import type { CSSProperties } from 'react'
import { clientLogos } from '../data/siteContent'

const monkeyConstellation = new URL('../assets/monkey-teladupla.png', import.meta.url).href
const logoStepDuration = 1600

export function ClientsSection() {
  const [focusedLogo, setFocusedLogo] = useState<number | null>(null)
  const [sequenceKey, setSequenceKey] = useState(0)

  function resetLogoSequence() {
    setFocusedLogo(null)
    setSequenceKey((key) => key + 1)
  }

  function getLogoClassName(label: string, index: number) {
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

    const isFocusedPair = focusedLogo !== null && Math.floor(focusedLogo / 2) === Math.floor(index / 2)

    return `client-feature-logo client-feature-logo--${slug}${fitClassName}${isFocusedPair ? ' is-focused' : ''}`
  }

  return (
    <section className="clients-section reveal" id="clientes">
      <h2 className="clients-title">Nossos Clientes</h2>
      <div
        className={`client-logo-showcase is-open${focusedLogo !== null ? ' has-focused-logo' : ''}`}
        style={{ '--logo-sequence-duration': `${Math.ceil(clientLogos.length / 2) * logoStepDuration}ms` } as CSSProperties}
        onMouseLeave={resetLogoSequence}
      >
        <img
          className="client-constellation-scene"
          src={monkeyConstellation}
          alt=""
          aria-hidden="true"
        />
        <div className="client-logo-grid" aria-label="Logos de clientes" key={sequenceKey}>
          {clientLogos.map(({ image, label }, index) => (
            <div
              className={`client-logo-card${focusedLogo === index ? ' is-focused' : ''}`}
              key={image}
              style={{ '--logo-delay': `${Math.floor(index / 2) * logoStepDuration}ms` } as CSSProperties}
              tabIndex={0}
              aria-label={`Destacar ${label}`}
              onMouseEnter={() => setFocusedLogo(index)}
              onMouseLeave={resetLogoSequence}
              onFocus={() => setFocusedLogo(index)}
              onBlur={resetLogoSequence}
            />
          ))}
        </div>
        {(['left', 'right'] as const).map((side) => (
          <div
            className={`client-feature-screen client-feature-screen--${side}`}
            aria-hidden="true"
            key={`screen-${side}-${sequenceKey}`}
          >
            {clientLogos.map(({ image, label }, index) => {
              const isRightScreen = index % 2 === 1
              if ((side === 'right') !== isRightScreen) return null

              return (
                <img
                  className={getLogoClassName(label, index)}
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
