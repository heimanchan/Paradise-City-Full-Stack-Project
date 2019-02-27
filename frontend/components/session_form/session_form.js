import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", first_name: "", last_name: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push("/"));
  }

  render() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div className="modal">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <h1>Sign Up Now!</h1>
            <div className="session-input">
              <input placeholder='Username' type="text" className="form-input" value={this.state.username} onChange={this.handleChange("username")} />
            </div>
            <div className="session-input">
              <input placeholder='First Name' type="text" className="form-input" value={this.state.first_name} onChange={this.handleChange("password")} />
            </div>
            <div className="session-input">
              <input placeholder='Last Name' type="text" className="form-input" value={this.state.last_name} onChange={this.handleChange("first_name")} />
            </div>
            <div className="session-input">
              <input placeholder='Password' type="text" className="form-input" value={this.state.password} onChange={this.handleChange("last_name")} />
            </div>
            <div className="submit">
              <button>Sign Up</button>
            </div>
          </form>

          <div className="session-alt">
            <span>Already have an Airbnb account? </span> <Link to="/login">{this.props.formType}</Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className="modal">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <h1>Welcome! Please Log In.</h1>
            <div className="session-input">
              <input type="text" className="form-input" value={this.state.username} onChange={this.handleChange("username")} />
            </div>
            <div className="session-input">
              <input type="text" className="form-input" value={this.state.password} onChange={this.handleChange("password")} />
            </div>
            <div className="submit">
              <button>Log In</button>
            </div>
          </form>

          <div className="session-alt">
            <span>Don’t have an account? </span> <Link to="/signup">{this.props.formType}</Link>
          </div>
        </div>
      )
    }
    
  }
}
export default SessionForm;