import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {

  constructor() {
    super()
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jode@dfds.com',
          phone: '34534378'
        },
        {
          id: 2,
          name: 'Harley Queen',
          email: 'hley@dfds.com',
          phone: '56756756'
        },
        {
          id: 3,
          name: 'Jenifer Lewrance',
          email: 'jlow@dfds.com',
          phone: '122342342'
        }
      ]
    }
  }

  deleteContact = (id) => {
    const { contacts } = this.state

    const newContacts = contacts
      .filter((contact) => contact.id !== id)

    this.setState({contacts: newContacts})

  }

  render() {
    const { contacts } = this.state
    return (
      <React.Fragment>
        {contacts.map(({ id, ...contact}) => (
          <Contact
            key={id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, id)}
          />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts
