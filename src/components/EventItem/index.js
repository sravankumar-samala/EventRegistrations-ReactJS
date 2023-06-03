// Write your code here

import './index.css'

const EventItem = props => {
  const {eventObject, onClickEvent} = props

  const {imageUrl, name, location} = eventObject

  return (
    <li className="event-item">
      <button type="button" onClick={() => onClickEvent(eventObject)}>
        <img src={imageUrl} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
