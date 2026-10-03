import './FlightPath.css'

export default function FlightPath({ steps }) {
  return (
    <ol className="flight-path">
      {steps.map((step) => (
        <li key={step.title} className="flight-path__step">
          <span className="flight-path__marker" aria-hidden="true" />
          <div className="flight-path__content">
            <p className="flight-path__period">{step.period}</p>
            <h3 className="flight-path__title">{step.title}</h3>
            <p className="flight-path__description">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
