const birthDate = document.querySelector("#birthdate");
const resultInput = document.querySelector("#result");

function howManyDays() {
  const birthDateStr = birthDate.value;
  const birthDateTimestamp = Date.parse(birthDateStr);
  const currentTimestamp = Date.now();
  const timeDiff = birthDateTimestamp - currentTimestamp;
  const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  console.log(daysPassed);

  document.getElementById("error").innerHTML = "";

  if (birthDateStr == "") {
    document.getElementById("error").innerHTML += "Input your birthdate!";
  } else {
    resultInput.textContent = `${daysPassed} days left till your birthday!`;
  }
}
