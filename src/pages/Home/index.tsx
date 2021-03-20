import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import cx from "classnames";
import styles from "./home.module.scss";

const Button = (props:any) => (
  <Link to={props.to} className={styles.link}>
    {props.label}
  </Link>
);

const Home = () => {
  return (
    <div className={cx(styles.centralizer)}>
      <div className={cx(styles.btn)}>
        <Button to="./SignIn" label="Sign In" />
        <Button to="./SignUp" label="Sign Up" />
      </div>
    </div>
  );
};

export default Home;


