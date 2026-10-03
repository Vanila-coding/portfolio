import './TrajectoryLine.css'

export default function TrajectoryLine() {
  return (
    <svg
      className="trajectory-line"
      viewBox="0 0 1000 160"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="trajectory-line__path"
        d="M 10 140 C 260 140, 360 20, 620 60 S 900 130, 990 30"
        pathLength="1"
      />
      <circle className="trajectory-line__point" cx="10" cy="140" r="5" />
      <circle
        className="trajectory-line__point trajectory-line__point--end"
        cx="990"
        cy="30"
        r="5"
      />
    </svg>
  )
}
