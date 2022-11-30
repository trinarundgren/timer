// Implement an alarm clock / timer 
// which will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments

// Example usage:

// node timer1.js 10 3 5 15 9 

// This will make it beep at:
// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

let userInput = process.argv;
userInput.splice(0,2);
if(userInput.length !== 0) {
  for (let i in userInput) {
    if (userInput[i] >= 0 && !isNaN(userInput[i])) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, userInput[i] * 1000);
    }
  }
}


