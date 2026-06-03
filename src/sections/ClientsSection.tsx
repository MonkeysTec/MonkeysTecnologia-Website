import { useState } from 'react'
import type { CSSProperties } from 'react'
import { clientLogos } from '../data/siteContent'

const monkeyConstellation = new URL('../assets/Monkey-direitoalto.png', import.meta.url).href
const monkeyOff = new URL('../assets/monkey-off.png', import.meta.url).href

export function ClientsSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedLogo, setFocusedLogo] = useState<number | null>(null)
  const [sequenceKey, setSequenceKey] = useState(0)

  function openConstellation() {
    setIsOpen(true)
    setSequenceKey((key) => key + 1)
  }

  function closeConstellation() {
    setIsOpen(false)
    setFocusedLogo(null)
  }

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

    return `client-feature-logo client-feature-logo--${slug}${fitClassName}${focusedLogo === index ? ' is-focused' : ''}`
  }

  return (
    <section className="clients-section reveal" id="clientes">
      <div
        className={`client-logo-showcase${isOpen ? ' is-open' : ''}${focusedLogo !== null ? ' has-focused-logo' : ''}`}
        style={{ '--logo-sequence-duration': `${clientLogos.length * 900}ms` } as CSSProperties}
        onMouseLeave={closeConstellation}
      >
        <img
          className="client-off-scene"
          src={monkeyOff}
          alt=""
          aria-hidden="true"
        />
        <img
          className="client-off-focus"
          src={monkeyOff}
          alt=""
          aria-hidden="true"
        />
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
              style={{ '--logo-delay': `${index * 900}ms` } as CSSProperties}
              tabIndex={0}
              aria-label={`Destacar ${label}`}
              onMouseEnter={() => setFocusedLogo(index)}
              onMouseLeave={resetLogoSequence}
              onFocus={() => setFocusedLogo(index)}
              onBlur={resetLogoSequence}
            />
          ))}
        </div>
        <div className="client-feature-screen" aria-hidden="true" key={`screen-${sequenceKey}`}>
          {clientLogos.map(({ image, label }, index) => (
            <img
              className={getLogoClassName(label, index)}
              src={image}
              alt=""
              key={`${label}-${image}`}
              style={{ '--logo-delay': `${index * 900}ms` } as CSSProperties}
            />
          ))}
        </div>
        {!isOpen && (
          <button
            className="client-open-trigger"
            type="button"
            aria-label="Revelar constelação de clientes"
            onClick={openConstellation}
          />
        )}
      </div>
    </section>
  )
}
