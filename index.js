const pi = 3.14

function showMessage(message) {
  console.log(message)
}

const alsoShowsMessage = (message) => console.log(message)

showMessage("Oi")
alsoShowsMessage("Oi de novo!")
