// Write your code here.
import './index.css'

const NavBar = props => {
  const {clickedLength, isGameFinished, topscore} = props
  return (
    <nav className="bg">
      <div className="brand">
        <img
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="brand-name">Emoji Game</h1>
      </div>

      {isGameFinished ? null : (
        <div className="score">
          <p className="score-item">Score:{clickedLength}</p>

          <p className="score-item">Top Score:{topscore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
