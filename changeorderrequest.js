function betterCountdown() {
      //js function is a block of code designed to perform a specific task. In this case we are invoking (calling) betterCountdown
    var currTime = 10;
      //var declares a variable, in this case the variable currTime
    for (var i = 1; i <= 11; i++) {
          //the increment ++ operator adds 1 to the operand
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            //The if/else statement executes a block of code if a specified condition is true
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                //innerHTML sets the HTML contects of an element on a web page
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                //The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
                //in this case the 1000 means 1000 milliseconds which is equals to 1 second.
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}
function whileCount() {
    //the whilecount statement creates a loop
    var currTime = 10;
    var i = 1;
    while (i < 12) {


        if (i == 11) {      
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                //the document.getElementById returns an element object representing the element whose id property matches the specified string, in this case the countdowntimer.
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}