import './InfoPanel.css'

export default function InfoPanel({ title, items }) {
  return (
    <div className="info-panel">
      <p className="info-panel__title">{title}</p>
      <dl className="info-panel__list">
        {items.map((item) => (
          <div key={item.label} className="info-panel__row">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
