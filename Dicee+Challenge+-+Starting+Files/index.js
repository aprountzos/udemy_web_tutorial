var p1 = Math.floor(Math.random() * 6 + 1);
var p2 = Math.floor(Math.random() * 6 + 1);
console.log(p1 + " " + p2);
var winner = () => {
  if (p1 === p2) return "Draw";
  else if (p1 > p2) return "🚩Player 1 Wins!";
  else return "Player 2 Wins!🚩";
}
document.querySelector("h1").textContent = winner();
document.querySelector(".img1").setAttribute("src", "images/dice" + p1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + p2 + ".png");