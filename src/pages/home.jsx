import React from "react";
import home from "../stylesheets/pages/home.module.css"
import icon_1 from "./icons/icon_1.png";
import icon_2 from "./icons/icon_2.png" 

function Home(props) {
    

  return (
    <main className={home.main}>
        <div className={home.header}>
      <img src={icon_1} className={home.icon1 } alt="" />
            <div className={home.TitleContainer}>
              <h1>Let's start</h1>
              <h2>create a new task, check one or choose a category </h2>
            </div>
      <img src={icon_2} className={ home.icon2 } alt="" />
            
        </div>
    </main>
        )
}

export default Home