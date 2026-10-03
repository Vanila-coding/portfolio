import Tag from './Tag.jsx'
import './SkillCard.css'

export default function SkillCard({ title, items }) {
  return (
    <div className="skill-card">
      <h3 className="skill-card__title">{title}</h3>
      <ul className="skill-card__items">
        {items.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}
