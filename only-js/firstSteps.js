const pi = 3.14
//classic function
function showMessage(message) {
  console.log(message)
}
//arrow function
const alsoShowsMessage = (message) => console.log(message)
//anonymous functions (same use as the arrow function, but with different syntax)
const anonymouslyShowingMessage = function (message) {
  console.log(message)
}
showMessage("Oi")
alsoShowsMessage("Oi de novo!")
anonymouslyShowingMessage("Oi escondido!")
