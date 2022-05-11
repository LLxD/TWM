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

//working with arrays
// using const because this is always going to be an array
const ourAmazingArray = [1, 2, 3, 4, 5]

//accessing one array position
console.log(ourAmazingArray[2])

// iterating through array
ourAmazingArray.forEach((value) => console.log(value))
const ourNewAmazingArray = ourAmazingArray.map((value) => value)

//adding to the end of the array
ourAmazingArray.push(6)

console.log(ourAmazingArray, ourNewAmazingArray)

//removing the last item from the array
ourAmazingArray.pop()

console.log(ourAmazingArray, ourNewAmazingArray)
