import React from "react";
import home from "../stylesheets/pages/home.module.css";
import icon_1 from "../assets/icon_1.png";
import icon_2 from "../assets/icon_2.png";
import plus from "../assets/plus.svg";
import List from "../components/List";
import LoginButton from "../components/LoginButton";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to="/tasks/newtask" className={home.link}>
      <h4 className={home.h4}>Create a tasks</h4>
      <img className={home.plus} src={plus} alt=" " />
    </Link>
  );
}

function Home() {
  return (
    <main className={home.main}>
      <LoginButton isLogger="true" />
      <div className={home.header}>
        {/* <img src={icon_1} className={home.icon1 } alt=" " /> */}
        <div className={home.TitleContainer}>
          <h1>Let's start</h1>
          <h2>create a new task, check one or choose a category </h2>
        </div>
        {/* <img src={icon_2} className={ home.icon2 } alt=" " /> */}
      </div>
      <div className={home.upperContainer}>
        <List title="Last tasks" data={["Task 1", "Task 2", "Task 3"]} />
        <Button />
        <List title="Categories" data={["Home", "Work", "Study"]} />
      </div>
    </main>
  );
}

export default Home;
