import Card from "./components/Card.js";
import Navbar from "./components/Navbar.js";
import cardData from "./dictionary/cardData.js";

//mengambil element yang akan di inject
const App = document.getElementById("App");

//inject component ke main component App
App.innerHTML += `

    ${Navbar()}

    ${cardData
      .map((e) => {
        return Card(e.id, e.title, e.body, e.img);
      })
      .join("")}
   
`;
