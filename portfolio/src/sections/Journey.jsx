import FlightPath from '../components/FlightPath.jsx'
import Section from '../components/Section.jsx'
import { journey } from '../data/journey.js'

export default function Journey() {
  return (
    <Section id="journey" index="04" label="Trajectoire" title="Parcours jusqu’ici">
      <FlightPath steps={journey} />
    </Section>
  )
}
