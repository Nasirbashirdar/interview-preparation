function minCoins(n) {
  let denominations = [5, 2, 1];
  let available = { 5: 5, 2: 5, 1: 5 };
  let count = 0;

  for (let coin of denominations) {
    let needed = Math.min(Math.floor(n / coin), available[coin]);
    n -= needed * coin;
    count += needed;
  }
  return n === 0 ? count : 0;
}

console.log(minCoins(8));

function minCoinsTwo(n) {
  let coins = [5, 2, 1];
  let available = { 5: 5, 2: 5, 1: 5 };
  let count = 0;
  for (let coin of coins) {
    while (n >= coin && available[coin] > 0) {
      n -= coin;
      available[coin]--;
      count++;
    }
  }
  return n === 0 ? count : 0;
}

console.log(minCoinsTwo(8));
