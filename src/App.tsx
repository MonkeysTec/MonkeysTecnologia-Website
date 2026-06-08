import { ContactSection } from './sections/ContactSection'
import { ClientsSection } from './sections/ClientsSection'
import { EntrySection } from './sections/EntrySection'
import { Header } from './sections/Header'
import { HeroSection } from './sections/HeroSection'
import { HighlightsStrip } from './sections/HighlightsStrip'
import { PainSection } from './sections/PainSection'
import { ProcessSection } from './sections/ProcessSection'
import { ServicesSection } from './sections/ServicesSection'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import './App.css'

function App() {
  useRevealOnScroll()

  return (
    <main className="site-shell">
      <Header />
      <HeroSection />
      <HighlightsStrip />
      <PainSection />
      <ServicesSection />
      <EntrySection />
      <ProcessSection />
      <ClientsSection />
      <ContactSection />
      <footer className="site-footer">
        © 2025 MonkeysTecnologia. All rights reserved.
      </footer>
      <div className="page-end-spacer" aria-hidden="true" />
    </main>
  )
}

export default App
