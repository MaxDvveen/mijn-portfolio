
var huidigeDatum = new Date();

function tweeCijfersGetal(num) {
  return num.toString().padStart(2, "0");
}

var dag = tweeCijfersGetal(huidigeDatum.getDate());
var maand = tweeCijfersGetal(huidigeDatum.getMonth() + 1); 
var jaar = huidigeDatum.getFullYear();

console.log("Huidige datum: " + dag + "-" + maand + "-" + jaar);

var andereDatum = new Date("2022-12-31");

if (huidigeDatum < andereDatum) {
  console.log("De huidige datum is eerder dan de andere datum.");
} else if (huidigeDatum > andereDatum) {
  console.log("De huidige datum is later dan de andere datum.");
} else {
  console.log("De huidige datum is gelijk aan de andere datum.");
}
