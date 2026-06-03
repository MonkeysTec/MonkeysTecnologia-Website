import { ContactSection } from './sections/ContactSection'
import { ClientsSection } from './sections/ClientsSection'
import { EntrySection } from './sections/EntrySection'
import { Header } from './sections/Header'
import { HeroSection } from './sections/HeroSection'
import { HighlightsStrip } from './sections/HighlightsStrip'
import { PainSection } from './sections/PainSection'
import { ProcessSection } from './sections/ProcessSection'
import { ServicesSection } from './sections/ServicesSection'
import { useLockHorizontalScroll } from './hooks/useLockHorizontalScroll'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import './App.css'

function App() {
  useRevealOnScroll()
  useLockHorizontalScroll()

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
      <div className="page-end-spacer" aria-hidden="true" />
    </main>
  )
}

export default App
