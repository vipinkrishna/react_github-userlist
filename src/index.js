import React, { Component } from 'react';
import { render } from 'react-dom';
import Details from './Details';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usersData: [],
      error: null,
      selectedUser: null
    };
  }

  handleClick = (id) => {
    const selectedUser = this.state.usersData.find(user => user.id === id)
    this.setState(() => ({selectedUser}))
    // this.setState(() => ({selectedUser}), () => console.log(this.state.selectedUser))
  }

  render() {
    const usersList = this.state.usersData.map(user => {
      return <li key={user.id} onClick={()=>this.handleClick(user.id)}>{user.login}</li>
    })
    return (
      <>
        <div className="UserList">
          <h1>Github Users</h1>
          <ul>{usersList}</ul>
        </div>
          <Details user={this.state.selectedUser} />
      </>
    );
  }

  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({usersData: data})
        })
      .catch(err => this.setState({error: err.message}))
  }
}

render(<App />, document.getElementById('root'));
