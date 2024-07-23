// Method 1:
// const displayMessage = (arg) => console.log(arg);

// module.exports = displayMessage;

// Method 2:
// module.exports = (arg) => console.log(arg);

// Method 3:
module.exports = function displayMessage(arg) {
  console.log(arg);
};
