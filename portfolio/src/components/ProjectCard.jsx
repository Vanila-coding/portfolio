import StatusBadge from './StatusBadge.jsx'
import Tag from './Tag.jsx'
import './ProjectCard.css'

export default function ProjectCard({ code, project }) {
  const { name, type, description, technologies, status, github, liveDemo } =
    project

  return (
    <article className="project-card">
      <header className="project-card__header">
        <span className="project-card__code">{code}</span>
        <StatusBadge>{status}</StatusBadge>
      </header>

      <div className="project-card__body">
        <h3 className="project-card__name">{name}</h3>
        <p className="project-card__type">{type}</p>
        <p className="project-card__description">{description}</p>
      </div>

      <ul className="project-card__tags" aria-label="Technologies">
        {technologies.map((technology) => (
          <li key={technology}>
            <Tag>{technology}</Tag>
          </li>
        ))}
      </ul>

      {(github || liveDemo) && (
        <footer className="project-card__links">
          {github && (
            <a className="button" href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {liveDemo && (
            <a
              className="button button--primary"
              href={liveDemo}
              target="_blank"
              rel="noreferrer"
            >
              Démo en ligne
            </a>
          )}
        </footer>
      )}
    </article>
  )
}
