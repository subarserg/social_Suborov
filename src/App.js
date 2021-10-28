import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wraper">
      <header className="header">
        <img src="https://img2.freepng.ru/20180701/oht/kisspng-fox-logo-graphic-design-art-fox-vector-5b3891a35deb36.5519866715304339553847.jpg"></img>
      </header>
      <nav className="nav">
        <div>Profile</div>
        <div>Message</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
      </nav>
      <main className="main">
        <div>
          <div>
            <img src="https://www.vinterier.ru/pictures/shop/osen-v-moskve-kartina-maslom-60x50.jpg"></img>
          </div>
          <div>Ava+Discraption</div>
          <div>New post</div>
        </div>
      </main>
      <footer className="footer">Contacts</footer>
    </div>
  );
};

export default App;
