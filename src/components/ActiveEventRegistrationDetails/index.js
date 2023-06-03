// Write your code here
import './index.css'

const eventStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {selectedEvent} = props

  const renderYetToRegisterStatus = () => (
    <>
      <div className="status-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
          alt="yet to register"
        />
      </div>

      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can ofter make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </>
  )

  const renderRegisteredStatus = () => (
    <>
      <div className="status-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
        />
      </div>

      <h1>You have already registered for the event.</h1>
    </>
  )

  const renderClosedStatus = () => (
    <>
      <div className="status-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
        />
      </div>
      <h2 className="heading-closed-regs">Registrations Are Closed Now!</h2>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </>
  )

  switch (selectedEvent) {
    case eventStatusConstants.initial:
      return <p>Click on an event, to view its registration details</p>
    case eventStatusConstants.yetToRegister:
      return renderYetToRegisterStatus()
    case eventStatusConstants.registered:
      return renderRegisteredStatus()
    case eventStatusConstants.closed:
      return renderClosedStatus()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
