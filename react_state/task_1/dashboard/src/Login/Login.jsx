import { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
    console.log('Logged in successfully', this.state.email)
  }

  handleChangeEmail = (event) => {
    const email = event.target.value;
    this.setState({ email }, this.validateForm);
  };

  handleChangePassword = (event) => {
    const password = event.target.value;
    this.setState({ password }, this.validateForm)
  };

  validateForm = () => {
    const { email, password } = this.state;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= 8;
    this.setState({ enableSubmit: emailValid && passwordValid })
  };

  render() {
    const { email, password, enableSubmit, isLoggedIn } = this.state;

    if (isLoggedIn) {
      return (
        <div className={css(styles.body)}>
          <p>Welcome back, {email}!</p>
        </div>
      );
    }

    return (
      <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>

        <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
          />

          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}
          />

          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
            className={css(styles.submit)}
          />
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginTop: "100px",
    textAlign: "center",
  },
  input: {
    margin: "0 5px",
  },
  submit: {
    marginTop: "10px",
    cursor: "pointer",
  },
  form: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.5rem'
    }
  }
});

export default Login;