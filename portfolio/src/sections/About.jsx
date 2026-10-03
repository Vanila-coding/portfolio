import InfoPanel from '../components/InfoPanel.jsx'
import Section from '../components/Section.jsx'
import Tag from '../components/Tag.jsx'
import { profile } from '../data/profile.js'
import './About.css'

export default function About() {
  return (
    <Section id="about" index="01" label="À propos" title={profile.aboutTitle}>
      <div className="about__grid">
        <div className="about__text">
          <p>{profile.aboutText}</p>
          <ul className="about__interests" aria-label="Centres d’intérêt">
            {profile.interests.map((interest) => (
              <li key={interest}>
                <Tag>{interest}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <InfoPanel title="Profil développeur" items={profile.developerProfile} />
      </div>
    </Section>
  )
}
