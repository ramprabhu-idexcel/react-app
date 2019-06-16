import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div> { this.renderUsers() } </div>
    )
  }

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/pages.json')
        .then(response => response.json())
        .then(json => this.setState({users: json}))
        .catch(error => console.log(error))
  }

  renderUsers() {
    return this.state.users.map((user, index) => <div className={'row'} key={index}> {user.first_name} </div>)
  }
}

export default App
