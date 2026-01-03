import React from "react";
import info from "./info.jsx";
import Pic from "../img/man.avif";

function main() {
  return (
    <div className="box-group container">
      {info.map((user) => (
        <div className="box" key={user.id}>
          <img src={Pic} alt={user.name} />
          <div className="dec">
            <h2 className="name">Name: {user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Address: {user.adress}</p>
            <a href="tel:+998930610099">
              <i class="fa-solid fa-phone"></i> +998930610099
            </a>
            <a href={user.instagram}>
              <i class="fa-brands fa-instagram"></i> Instagram
            </a>
            <a href={user.telegram}>
              {" "}
              <i class="fa-brands fa-telegram"></i> Telegram
            </a>
            <a href={user.githup}>
              <i class="fa-brands fa-github"> </i> GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default main;
