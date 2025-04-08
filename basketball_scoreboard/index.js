let scoreA = 0;
let scoreB = 0;

function increaseScore(team, points) {
  if (team === "A") {
    scoreA += points;
    document.getElementById("scoreA").innerText = scoreA;
  } else {
    scoreB += points;
    document.getElementById("scoreB").innerText = scoreB;
  }
}

function resetScores() {
  scoreA = 0;
  scoreB = 0;
  document.getElementById("scoreA").innerText = scoreA;
  document.getElementById("scoreB").innerText = scoreB;
}
