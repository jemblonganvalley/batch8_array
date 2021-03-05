import Card from "./components/Card.js";
import Navbar from "./components/Navbar.js";
import cardData from "./dictionary/cardData.js";

//mengambil element yang akan di inject
const App = document.getElementById("App");

//inject component ke main component App
App.innerHTML += `

    ${Navbar()}
   
`;

fetch("http://localhost:3000/card_data", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.map((e) => {
      App.innerHTML += Card(e.id, e.title, e.body, e.img);
    });
  })
  .catch((err) => console.log(err));
