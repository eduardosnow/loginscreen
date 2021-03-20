import React from "react";
import SignIn from "./SignIn";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import cx from "classnames";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={cx(styles.centralizer)}>

    

      <div className={cx(styles.btn)}>
        <div className={cx(styles.signInBtn)}>
          <Router>
            <Link to="./SignIn" className={cx(styles.link)}>
              Sign In
            </Link>

            <Route path="/#/" exact component={Home} />
          </Router>
        </div>

        <div className={cx(styles.signUpBtn)}>
          <Router>
            <Link to="./SignUp" className={cx(styles.link)}>
              Sign Up
            </Link>

            <Route path="/#/" exact component={Home} />
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Home;
