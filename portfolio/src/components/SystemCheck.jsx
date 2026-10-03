import Reveal from './Reveal.jsx'
import './SystemCheck.css'

export default function SystemCheck({ items }) {
  return (
    <Reveal className="system-check">
      <p className="system-check__title">Contrôle système</p>
      <ul className="system-check__list">
        {items.map((item, index) => (
          <li
            key={item}
            className="system-check__item"
            style={{ '--index': index }}
          >
            <span aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="system-check__result">Tous les systèmes sont opérationnels</p>
    </Reveal>
  )
}
