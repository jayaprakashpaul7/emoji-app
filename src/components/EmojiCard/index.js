// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onSelectEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const selectEmoji = () => {
    onSelectEmoji(id)
  }

  return (
    <li>
      <button type="button" className="li-item" onClick={selectEmoji}>
        <div>
          <img className="emoji" src={emojiUrl} alt={emojiName} />
        </div>
      </button>
    </li>
  )
}
export default EmojiCard
