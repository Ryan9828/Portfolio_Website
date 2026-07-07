import { Hero } from '@/components/hero/Hero'
import { AboutSection } from '@/components/about/AboutSection'
import { ProjectsSection } from '@/components/projects/ProjectsSection'
import { ContactFooter } from '@/components/contact/ContactFooter'

function App() {
  return (
    <div className="w-full">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactFooter />
    </div>
  )
}

export default App
