import React from 'react';
import { Link, hashHistory } from 'react-router';


class SessionForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up instead!</Link>;
    } else {
      return <Link to="/login">login instead!</Link>;
    }
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render(){
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h2>Welcome to BenchBnB</h2>
          <h3>Please {this.props.formType} or {this.navLink()}</h3>
          {this.renderErrors()}
          <div className="login-form-content">
            <label>Username:
              <input type="text" value={this.state.username} onChange={this.update("username")}></input>
            </label>
            <label>Password:
              <input type="password" value={this.state.password} onChange={this.update("password")}></input>
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>

    );
  }

}

export default SessionForm;
