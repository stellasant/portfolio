import { SiteNav } from './components/SiteNav'
import { Hero } from './sections/Hero'
import { FeaturedWork } from './sections/FeaturedWork'
import { TechnicalInitiatives } from './sections/TechnicalInitiatives'
import { CurrentAiWork } from './sections/CurrentAiWork'
import { ExperienceByArea, Leadership } from './sections/ExperienceAndLeadership'
import { About, Contact, EarlierDesignWork } from './sections/Closing'

/** Section order follows Stella_Portfolio_Final_Structure.md exactly. */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#featured-work">
        Skip to the work
      </a>

      <SiteNav />

      <main className="page" id="main">
        <Hero />
        <FeaturedWork />
        <TechnicalInitiatives />
        <CurrentAiWork />
        <ExperienceByArea />
        <Leadership />
        <EarlierDesignWork />
        <About />
        <Contact />
      </main>
    </>
  )
}
