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

const showElement = (element, position) =>
  console.log(`The element ${element} is on position ${position}`)

ourAmazingArray.map(showElement)

const ourAmazingJsonArray = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }
]
//show titles
const showTitle = (obj) => console.log(obj.title)

ourAmazingJsonArray.map(showTitle)

//filter out titles which length is greater than 20
const filterLongTitles = (obj) => obj.title.length < 20

console.log(ourAmazingJsonArray.filter(filterLongTitles))
