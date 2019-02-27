import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
  }
  render() {

    return (
      <div className="modal">
        <form className="session-form">
          <h1>Sign up</h1>
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

        </div>
      </div>
    )
  }

}