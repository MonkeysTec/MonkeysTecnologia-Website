import type { ServicePreviewType } from '../types'

type ServicePreviewProps = {
  type: ServicePreviewType
}

export function ServicePreview({ type }: ServicePreviewProps) {
  if (type === 'web') {
    return (
      <div className="service-preview preview-web" aria-hidden="true">
        <span data-part="layout" />
        <span data-part="title" />
        <span data-part="copy" />
        <strong data-part="cta" />
      </div>
    )
  }

  if (type === 'automation') {
    return (
      <div className="service-preview preview-automation" aria-hidden="true">
        <span data-step="Entrada" />
        <i />
        <span data-step="IA" />
        <i />
        <span data-step="Ação" />
      </div>
    )
  }

  if (type === 'data') {
    return (
      <div className="service-preview preview-data" aria-hidden="true">
        <span data-value="32%" />
        <span data-value="68%" />
        <span data-value="91%" />
        <span data-value="54%" />
      </div>
    )
  }

  return (
    <div className="service-preview preview-support" aria-hidden="true">
      <span data-check="Diagnóstico" />
      <span data-check="Correção" />
      <span data-check="Evolução" />
    </div>
  )
}
