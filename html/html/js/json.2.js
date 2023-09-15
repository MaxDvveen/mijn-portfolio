var boekenwinkel = {
    boeken: [
      {
        titel: "The circle",
        auteur: "Dave Eggers",
        jaar: 2013
      },
      {
        titel: "To Kill a Mockingbird",
        auteur: "Harper Lee",
        jaar: 1960
      },
      {
        titel: "1984",
        auteur: "George Orwell",
        jaar: 1949
      }
    ]
  };
  console.log(boekenwinkel);
 
  var jsonString = JSON.stringify(boekenwinkel);
  
  console.log(jsonString);
  
 var jsObject = JSON.parse(jsonString);
  
  console.log(jsObject);
  