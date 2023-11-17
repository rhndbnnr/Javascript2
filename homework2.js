function print(callBack) {
  callBack(); //What is a callback function
}
const message = function () {
  //how to create a callback function
  console.log("This message is shown after 3 seconds");
};
setTimeout(message, 3000);

setTimeout(function () {
  //Anonymous function
  console.log("This message is shown after 3 seconds.");
}, 3000);

setTimeout(() => {
  //Callback as an arrow function
  console.log("This message will be shown after 3 seconds.");
}, 3000);

document.querySelector("callBack-btn").addEventListener("click", function () {
  console.log("User has clicked on the button"); //add an event
});
