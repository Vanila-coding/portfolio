import { useState } from 'react'
import Section from '../components/Section.jsx'
import { profile } from '../data/profile.js'
import { sendTransmission } from '../services/contact.js'
import './Contact.css'

const EMPTY_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setFeedback(null)

    try {
      await sendTransmission(form)
      setForm(EMPTY_FORM)
      setFeedback({ type: 'success', text: 'Transmission envoyée.' })
    } catch (error) {
      setFeedback({ type: 'error', text: error.message })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Section
      id="contact"
      index="05"
      label="Demande d’autorisation"
      title="Vous avez un projet en tête ? Planifions la prochaine mission."
    >
      <div className="contact__grid">
        <div className="contact__details">
          <p>
            Décrivez votre projet, votre opportunité ou votre question, et je
            reviendrai vers vous.
          </p>
          {profile.email && (
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          )}
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <p className="contact__notice">
            Aucun backend n’est connecté pour le moment. Envoyer ce formulaire
            n’envoie pas de message.
          </p>

          <div className="field">
            <label htmlFor="contact-name">Nom</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="contact-email">E-mail</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="button button--primary"
            disabled={isSending}
          >
            Envoyer la transmission
          </button>

          <p
            className={`contact__feedback ${feedback ? `contact__feedback--${feedback.type}` : ''}`}
            aria-live="polite"
          >
            {feedback?.text}
          </p>
        </form>
      </div>
    </Section>
  )
}
