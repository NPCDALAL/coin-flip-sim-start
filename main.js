// COIN FLIP SIMULATOR

// HTML ELement Variables
let outputEl = document.getElementById("output");

// Btn Click Event
document.getElementById("btn").addEventListener("click", btnHandler);

function btnHandler() {
  // First Coin Flip
  let coin1 = flipCoin();

  // Second Coin Flip
  let coin2 = flipCoin();

  // Third Coin Flip
  let coin3 = flipCoin();

  // Output Results
  let pEl = document.createElement("p");
  pEl.innerHTML = `<img src="img/${coin1}.png"> <img src="img/${coin2}.png"> <img src="img/${coin3}.png">`;
  outputEl.appendChild(pEl);
}

function flipCoin() {
  if (Math.random() < 0.5) {
    coin = "heads";
  } else {
    coin = "tails";
  }

  return coin;
}
