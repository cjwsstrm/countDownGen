var countdownGenerator = function (x) {
  var startCount = x;
  return function() {
    if (startCount === 0) {
      console.log("Blast off!");
    }
    else if (startCount < 0) {
      console.log("Rockets already gone, bub!");
    }
    else {
      console.log("T-minus " + startCount + "...");
    }
    startCount -= 1;
  }
};


var countdown = countdownGenerator(8);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();