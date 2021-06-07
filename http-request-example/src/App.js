import "./App.css";
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {this.state.users.map((user) => (
              <li>{user.login}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
  async componentDidMount() {
    try {
      const res = await axios.get("https://api.github.com/users");
      this.setState({ users: res.data });
    } catch (error) {}
  }
}

export default App;
