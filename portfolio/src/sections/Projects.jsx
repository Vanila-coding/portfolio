import ProjectCard from '../components/ProjectCard.jsx'
import Section from '../components/Section.jsx'
import { projects } from '../data/projects.js'
import './Projects.css'

export default function Projects() {
  return (
    <Section id="projects" index="02" label="Journal de vol" title="Missions sélectionnées">
      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            code={`Mission ${String(index + 1).padStart(2, '0')}`}
            project={project}
          />
        ))}
      </div>
    </Section>
  )
}
