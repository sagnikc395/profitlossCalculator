const initialPrice = document.querySelector(".initial-price");
const stocksCount = document.querySelector(".stocks-count");
const currentPrice = document.querySelector(".current-price");

const calcBtn = document.querySelector(".calculate-button");
const displayResult = document.querySelector(".display-result");

function calcProfitLoss(initial, quantity, current) {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossP = (loss / initial) * 100;
    displayOutput(`Hey, the loss is ${loss} and the percent is ${lossP}%`);
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitP = (profit / initial) * 100;
    displayOutput(
      `Hey, the profit is ${profit} and the percent is ${profitP}%`
    );
  } else {
    displayOutput(`No pain no gain and no gain no pain`);
  }
}

function calcBtnEventAction(initialPrice, stocksCount, currentPrice) {
  let initialPriceVal = Number(initialPrice.value);
  let stocksCountVal = Number(stocksCount.value);
  let currentPriceVal = Number(currentPrice.value);
}

function displayOutput(message) {
  displayResult.innerHTML = message;
}

calcBtn.addEventListener("click", calcBtnEventAction);
