import { profile } from '../data/profile.js'
import StatusBadge from './StatusBadge.jsx'
import './Footer.css'

const SOCIAL_LABELS = { github: 'GitHub', linkedin: 'LinkedIn' }
const YEAR = new Date().getFullYear()

export default function Footer() {
  const socialLinks = Object.entries(SOCIAL_LABELS).filter(
    ([key]) => profile.social[key],
  )

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {YEAR} {profile.name}
        </p>

        {socialLinks.length > 0 && (
          <nav aria-label="Réseaux sociaux">
            <ul className="footer__links">
              {socialLinks.map(([key, label]) => (
                <li key={key}>
                  <a href={profile.social[key]} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <StatusBadge>Système en ligne</StatusBadge>
      </div>
    </footer>
  )
}
