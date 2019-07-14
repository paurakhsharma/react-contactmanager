import React, {Component} from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts
          .filter(contact => contact.id !== action.payload)
      }
    
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer