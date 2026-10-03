import Section from '../components/Section.jsx'
import SkillCard from '../components/SkillCard.jsx'
import SystemCheck from '../components/SystemCheck.jsx'
import { skillCategories, systemCheck } from '../data/skills.js'
import './Skills.css'

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      label="Systèmes / technologies"
      title="Outils que j’utilise"
    >
      <div className="skills__grid">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
      <SystemCheck items={systemCheck} />
    </Section>
  )
}
