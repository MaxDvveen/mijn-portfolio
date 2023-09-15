script
var persoon = {
    naam: "Max van Veen",
    leeftijd: 16,
    hobbies: ["rugby", "gymen", "trainen"]
  };
  
  document.getElementById("Naam").innerText = "Naam: " + persoon.naam;
  document.getElementById("Leeftijd").innerText = "Leeftijd: " + persoon.leeftijd;
  document.getElementById("Hobby's").innerText = "Hobby's: " + persoon.hobbies.join(", ");
  