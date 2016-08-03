// I ran this with 1M and it takes a few minutes to complete
// I picked a value that returns pretty quickly but you can set it to whatever you want.
var MAX = 100000;

var ourPrimes = [];
var notPrimes = [];
var iStr, iNew, tmp;

for (var i = 0; i < MAX; i++) {

  // Short circuit if we know we looked at this before 
  if (ourPrimes.indexOf(i) > -1) {
    continue;
  }
  // Short circuit if we know it's not a prime 
  if (notPrimes.indexOf(i) > -1) {
    continue;
  }

  var tmpPrimes = [];

  if (isPrime(i)) {
    tmpPrimes.push(i);

    iStr = i.toString();
    for (var j = 1; j < iStr.length; j++) {
      tmp = iStr[0];
      iStr = iStr.substr(1) + tmp;
      iNew = parseInt(iStr);

      if (i === iNew) break;
      if (!isPrime(iNew)) {
        notPrimes.push(iNew);
        tmpPrimes = [];
        break;
      } else {
        tmpPrimes.push(iNew);
      }
    }
    ourPrimes = ourPrimes.concat(tmpPrimes);
  }
}

console.log("ourPrimes: " , ourPrimes);


function isPrime(num) {
  if (num < 2) return false;

  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

