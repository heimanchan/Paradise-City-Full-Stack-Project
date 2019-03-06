import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", first_name: "", last_name: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentDidMount(){
    this.state.errors = [];
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
      .then(() => {
        this.props.closeModal();
        this.props.history.push(`/search`)
      });
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, { username: "guest", password: "password" });
    if (this.props.formType === "Sign Up") {
      this.props.login(user)
        .then(() => {
          this.props.closeModal();
          this.props.history.push(`/search`)
        });
    } else {
      this.props.processForm(user)
        .then(() => {
          this.props.closeModal();
          this.props.history.push(`/search`)
        });
    }
  }

  sessionErrors() {
    return (
      <ul>
        {this.props.errors.session.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div className="modal">
          <div className="modal-form">
            <div onClick={this.props.closeModal} className="close-x">X</div>
            <h1>Sign up now</h1>
              <form className="session-form" onSubmit={this.handleSubmit}>
                <div className="session-input">
                  <input placeholder='Username' type="text" className="form-input" value={this.state.username} onChange={this.handleChange("username")} />
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <div className="session-input">
                  <input placeholder='First Name' type="text" className="form-input" value={this.state.first_name} onChange={this.handleChange("first_name")} />
                  <i className="fa fa-id-card" aria-hidden="true"></i>
                </div>
                <div className="session-input">
                  <input placeholder='Last Name' type="text" className="form-input" value={this.state.last_name} onChange={this.handleChange("last_name")} />
                  <i className="fa fa-id-card" aria-hidden="true"></i>
                </div>
                <div className="session-input">
                  <input placeholder='Password' type="password" className="form-input" value={this.state.password} onChange={this.handleChange("password")} />
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </div>
                <div className="session-errors">
                  {this.sessionErrors()}
                </div>
                <div className="session-submit">
                  <button>Sign up</button>
                  <button onClick={this.handleGuestLogin}>Demo User</button>
                </div>
              </form>
              <div className="session-alt">
                <span>Already have an Airbnb account? </span> 
                <span className="session-alt-form">
                  {this.props.otherForm}
                </span>
              </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="modal">
          <div className="modal-form">
            <div onClick={this.props.closeModal} className="close-x">X</div>
            <h1>Log in to continue</h1>
            <form className="session-form" onSubmit={this.handleSubmit}>
              <div className="session-input">
                <input placeholder="Username" type="text" className="form-input" value={this.state.username} onChange={this.handleChange("username")} />
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
              <div className="session-input">
                <input placeholder="Password" type="password" className="form-input" value={this.state.password} onChange={this.handleChange("password")} />
                <i className="fa fa-lock" aria-hidden="true"></i>
              </div>
              <div className="session-errors">
                {this.sessionErrors()}
              </div>
              <div className="session-submit">
                <button>Log in</button>
                <button onClick={this.handleGuestLogin}>Demo User</button>
              </div>
            </form>
            <div className="session-alt">
              <span>Don’t have an account? </span> 
              <span className="session-alt-form">
                {this.props.otherForm}
              </span>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default withRouter(SessionForm);