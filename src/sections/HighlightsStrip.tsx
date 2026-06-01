import { highlights } from '../data/siteContent'

export function HighlightsStrip() {
  return (
    <section className="highlight-strip" aria-label="Diferenciais">
      {highlights.map(({ icon: Icon, title, text }) => (
        <article className="highlight-item" key={title}>
          <Icon aria-hidden="true" />
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      ))}
    </section>
  )
}
