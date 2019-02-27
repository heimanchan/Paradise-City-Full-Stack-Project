import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", first_name: "", last_name: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  
  render() {
    return (
      <div className="modal">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h1>Sign Up Now!</h1>
          <div className="session-input">
            <input type="text" className="form-input" value="guest" onChange={this.handleChange("username")} />
          </div>
          <div className="session-input">
            <input type="text" className="form-input" value="Guest" onChange={this.handleChange("password")} />
          </div>
          <div className="session-input">
            <input type="text" className="form-input" value="Johnson" onChange={this.handleChange("first_name")} />
          </div>
          <div className="session-input">
            <input type="text" className="form-input" value="password" onChange={this.handleChange("last_name")} />
          </div>
          <div className="submit">
            <button>Sign Up</button>
          </div>
        </form>

        <div className="session-alt">
          <p>Already have an Airbnb account? </p> <Link to="/login">Log in</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(SignupForm);