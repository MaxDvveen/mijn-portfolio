var persoon = {
    naam: "Max van Veen",
    leeftijd: 16,
    hobbies: ["rugby", "gymen", "trainen"]
  };
  
  console.log("JSON-object:");
  console.log(persoon);
  
  var jsonStr = JSON.stringify(persoon);
  console.log("JSON-string:");
  console.log(jsonStr);
  
  var parsedObject = JSON.parse(jsonStr);
  console.log("JavaScript-object:");
  console.log(parsedObject);
  