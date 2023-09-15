function Optellen() {
    var getal1tekst = prompt("Voer het eerste getal in:");
    var getal1 = parseInt(getal1tekst);
  
    var getal2tekst = prompt("Voer het tweede getal in:");
    var getal2 = parseInt(getal2tekst);
  
    if (isNaN(getal1) || isNaN(getal2)) {
      document.write("ERROR: de ingevoerde getallen zijn geen nummers");
    } else {
      var totaal = getal1 + getal2;
      document.write("Het resultaat van " + getal1 + " plus " + getal2 + " is " + totaal);
    }
  }
  
  function Aftrekken() {
    var getal1tekst = prompt("Voer het eerste getal in:");
    var getal1 = parseInt(getal1tekst);
  
    var getal2tekst = prompt("Voer het tweede getal in:");
    var getal2 = parseInt(getal2tekst);
  
    if (isNaN(getal1) || isNaN(getal2)) {
      document.write("ERROR: de ingevoerde getallen zijn geen nummers");
    } else {
      var verschil = getal1 - getal2;
      document.write("Het resultaat van " + getal1 + " min " + getal2 + " is " + verschil);
    }
  }
  