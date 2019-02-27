import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateUsername(e) {
    this.setState({ username: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push("/"));
  }
  render() {
    return (
      <div className="modal">
        <form className="session-form">
          <h1>Welcome! Please Sign In.</h1>
          <div className="session-input">
            <input type="text" id="form-username" value="username" onChange={this.updateUsername} />
          </div>
          <div className="session-input">
            <input type="text" id="form-username" value="password" onChange={this.updatePassword} />
          </div>
          <div className="submit">
            <button>Sign Up</button>
          </div>
        </form>

        <div className="session-alt">
          <p>Don’t have an account? </p> <Link to="/signup">Sign up</Link>
        </div>
      </div>
    )
  }
}