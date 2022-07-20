var score = 0;
var partialx = 120;
var partialy = 200;
var elementx = 100;
var elementy = 420;

document.getElementById("left").onclick = () => {
  partialx += 5;
  document.getElementById("partial").style.left = partialx + "px";
};

document.getElementById("right").onclick = () => {
  partialx -= 5;
  document.getElementById("partial").style.left = partialx + "px";
};

document.getElementById("up").onclick = () => {
  partialy -= 5;
  document.getElementById("partial").style.top = partialy + "px";
};

document.getElementById("down").onclick = () => {
  partialy += 5;
  document.getElementById("partial").style.top = partialy + "px";
};

document.getElementById("outed").onclick = () => {
  if (elementx > partialx && elementy > partialy) {
    elementy += 30;
    score += 1;
    UpdateElement();
  }
};

function UpdateElement() {
  document.getElementById("outed").style.top = elementy + "px";
  document.getElementById("score").innerHTML = score;
}
