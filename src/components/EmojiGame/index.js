/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojis: [], topscore: 0, isGameFinish: false}

  resetGame = () => {
    this.setState({clickedEmojis: [], isGameFinish: false})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishAndSetTopScore = clickedLength => {
    const {topscore} = this.state
    if (clickedLength > topscore) {
      this.setState({topscore: clickedLength, isGameFinish: true})
    }
  }

  handleClick = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state

    const clickedLength = clickedEmojis.length

    const isEmojiPresent = clickedEmojis.includes(id)
    if (isEmojiPresent) {
      this.finishAndSetTopScore(clickedLength)
    } else {
      if (emojisList.length - 1 === clickedLength) {
        this.finishAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const {isGameFinish, clickedEmojis, topscore} = this.state
    this.shuffledEmojisList()
    return (
      <>
        <NavBar
          clickedLength={clickedEmojis.length}
          topscore={topscore}
          emojisList={emojisList}
        />
        <div className="cards-bg">
          {isGameFinish ? (
            <WinOrLossCard
              clickedLength={clickedEmojis.length}
              emojisList={emojisList}
              resetGame={this.resetGame}
            />
          ) : (
            <ul>
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  onSelectEmoji={this.handleClick}
                />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame
// ccbp submit RJSCPU31DB
