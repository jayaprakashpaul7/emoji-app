// Write your code here.

import './index.css'

const WinOrLossCard = props => {
  const {clickedLength, emojisList, resetGame} = props

  const handleResetGame = () => {
    resetGame()
  }

  const isWon = clickedLength === emojisList.length
  const url = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="win-loss-bg">
      <img className="win-loss-img-s" src={url} alt="win or lose" />

      <div className="text-container">
        <h1>{isWon ? 'You Won' : 'You Loss'}</h1>

        <p className="score-title">{isWon ? 'Best Score' : 'Score'}</p>
        <p className="score-no">
          {clickedLength}/{emojisList.length}
        </p>

        <button
          type="button"
          className="play-again-btn"
          onClick={handleResetGame}
        >
          Play Again
        </button>
      </div>
      <img className="win-loss-img-m" src={url} alt="win or lose" />
    </div>
  )
}
export default WinOrLossCard
