import { ArrowRight } from 'lucide-react'

export function Header() {
  return (
    <header className="topbar" aria-label="Navegação principal">
      <a className="brand" href="#inicio" aria-label="Monkeys Tecnologia">
        <span className="brand-mark">M</span>
        <span>
          <strong>Monkeys</strong>
          <small>Tecnologia</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Seções">
        <a href="#servicos">Serviços</a>
        <a href="#caminhos">Caminhos</a>
        <a href="#processo">Processo</a>
        <a href="#contato">Contato</a>
      </nav>

      <a className="nav-cta" href="#contato">
        Conversar
        <ArrowRight size={18} strokeWidth={2.4} />
      </a>
    </header>
  )
}
