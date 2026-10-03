import './SectionLabel.css'

export default function SectionLabel({ index, children }) {
  return (
    <p className="section-label">
      <span className="section-label__index">{index}</span>
      <span className="section-label__text">{children}</span>
    </p>
  )
}
