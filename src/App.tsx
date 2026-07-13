import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollUpButton } from './components/ScrollUpButton'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Highlights } from './sections/Highlights'
import { Work } from './sections/Work'
import { Timeline } from './sections/Timeline'
import { Contact } from './sections/Contact'
import { useDocumentMeta } from './hooks/useDocumentMeta'

function App() {
  useDocumentMeta()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Highlights />
        <Work />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <ScrollUpButton />
    </>
  )
}

export default App
