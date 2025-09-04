import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import WithLogging from "../HOC/WithLogging";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { newContext } from "../Context/context";

const LoginWithLogging = WithLogging(Login);
const CourseListWithLogging = WithLogging(CourseList);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };
  }

  // Show/Hide Notifications
  handleDisplayDrawer = () => this.setState({ displayDrawer: true });
  handleHideDrawer = () => this.setState({ displayDrawer: false });

  // Key shortcut for logout
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Login/Logout methods
  logIn = (email, password) => {
    this.setState({
      user: { email, password, isLoggedIn: true },
    });
  };

  logOut = () => {
    this.setState({
      user: { email: "", password: "", isLoggedIn: false },
    });
  };

  render() {
    const { user, displayDrawer } = this.state;

    const notificationsList = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: getLatestNotification() },
    ];

    const coursesList = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    return (
      <newContext.Provider value={{ user, logOut: this.logOut }}>
        <Notifications
          notifications={notificationsList}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />

        <Header />

        {user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseListWithLogging courses={coursesList} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <LoginWithLogging
              logIn={this.logIn}
              email={user.email}
              password={user.password}
            />
          </BodySectionWithMarginBottom>
        )}

        <BodySection title="News from the School" className={css(styles.body)}>
          <p>Holberton School News goes here</p>
        </BodySection>

        <Footer className={css(styles.footer)} />
      </newContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    marginTop: "300px",
    display: "flex",
    justifyContent: "center",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;',
    fontStyle: "italic",
    fontWeight: "lighter",
    borderTop: "solid #e1003c 2px",
  },
  body: { border: "none" },
});

export default App;
