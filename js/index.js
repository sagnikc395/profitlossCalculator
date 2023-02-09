const initialPrice = document.querySelector(".initial-price");
const stocksCount = document.querySelector(".stocks-count");
const currentPrice = document.querySelector(".current-price");

const calcBtn = document.querySelector(".calculate-button");
const displayResult = document.querySelector(".display-result");
const pageView = document.querySelector(".page-view");

function calcProfitLoss(initial, quantity, current) {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossP = (loss / initial) * 100;
    displayOutput(
      ` the loss is ${loss} and the percent is ${lossP}%`,
      "loss",
    );
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitP = (profit / initial) * 100;
    displayOutput(
      ` the profit is ${profit} and the percent is ${profitP}%`,
      "profit",
    );
  } else {
    displayOutput(`No pain no gain and no gain no pain`);
  }
}

function calcBtnEventAction() {
  let initialPriceVal = Number(initialPrice.value);
  let stocksCountVal = Number(stocksCount.value);
  let currentPriceVal = Number(currentPrice.value);
  calcProfitLoss(initialPriceVal, stocksCountVal, currentPriceVal);
}

function displayOutput(message, status) {
  if (status === "loss") {
    pageView.style = `
    background: #0FB5CF;
    background: -webkit-linear-gradient(top left, #0FB5CF, #D95977);
    background: -moz-linear-gradient(top left, #0FB5CF, #D95977);
    background: linear-gradient(to bottom right, #0FB5CF, #D95977);`;
    displayResult.innerHTML = "😭";
  } else if (status == "profit") {
    pageView.style = ` background: #E1F668;
    background: -webkit-linear-gradient(top left, #E1F668, #5AB1C5);
    background: -moz-linear-gradient(top left, #E1F668, #5AB1C5);
    background: linear-gradient(to bottom right, #E1F668, #5AB1C5);`;
    displayResult.innerHTML = "🤑🤑";
  }
  displayResult.innerHTML += message;
}

calcBtn.addEventListener("click", calcBtnEventAction);
