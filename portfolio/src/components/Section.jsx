import Reveal from './Reveal.jsx'
import SectionLabel from './SectionLabel.jsx'
import './Section.css'

export default function Section({ id, index, label, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <SectionLabel index={index}>{label}</SectionLabel>
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
          <div className="section__body">{children}</div>
        </Reveal>
      </div>
    </section>
  )
}
