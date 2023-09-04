// created a promoise to display a mesaage and called the promise.

function displayMessage(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

displayMessage("Hello, World", 2000)
  .then(() => {
    console.log("Promise resolved!");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
