const getColor = () => {
  // hex code
  const randNumber = Math.floor(Math.random() * 1677215);
  const randomCode = "#" + randNumber.toString(16);
  console.log(randNumber, randomCode);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("color-code").innerText = randomCode;
  navigator.clipboard.writeText(randomCode);
};
// event call
document.getElementById("btn").addEventListener("click", getColor);
// init call
getColor();
