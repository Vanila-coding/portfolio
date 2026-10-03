import InfoPanel from '../components/InfoPanel.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import TrajectoryLine from '../components/TrajectoryLine.jsx'
import logo from '../assets/logo.webp'
import { profile } from '../data/profile.js'
import './Hero.css'

const STATUS_ITEMS = [
  {
    label: 'Statut système',
    value: <StatusBadge>{profile.systemStatus.status}</StatusBadge>,
  },
  { label: 'Mode actuel', value: profile.systemStatus.mode },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__eyebrow">{profile.role}</p>
            <h1 className="hero__title">Construire des systèmes numériques qui prennent leur envol.</h1>
            <p className="hero__intro">{profile.intro}</p>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                Voir les projets
              </a>
              <a className="button" href="#contact">
                Me contacter
              </a>
            </div>

            <div className="hero__status">
              <InfoPanel title="Statut" items={STATUS_ITEMS} />
            </div>
          </div>

          <figure className="hero__visual">
            <img
              src={logo}
              alt="Logo Vanila Coding"
              width="640"
              height="640"
            />
          </figure>
        </div>

        <TrajectoryLine />
      </div>
    </section>
  )
}
