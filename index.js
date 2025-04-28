
let number = prompt("Enter a 4-digit number:");

if (number.length === 4) {
  let digits = number.split('');
  alert("The digits are: " + digits.join(", "));
} else {
  alert("Please enter exactly a 4-digit number!");
}