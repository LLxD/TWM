## Repository for the discipline of Mobile and Web Technologies

## Course Conclusion Chore

- [Check it live!](https://bx-challenge-frontend.herokuapp.com/) - WARNING: It can take a little bit to open, since it's on a free Heroku account.
- [Access the Front-End web app](https://github.com/LLxD/poketrader-front)
- [Access the Back-End web app](https://github.com/LLxD/poketrader-back)

Front-End:
- Vite
- React
- TailwindCSS

Back-End:
- Express

DB:
- MongoDB

### JS
---
file firstSteps.js

## Declaring Variables

To declare our variables, we can use ```let``` for variables that can change and ```const``` for variables that are constant.

```js
let changeableVariable = "Lucas"
const nonChangeableVariable = 3.14
```

## Loops

We can iterate through things using both our basic ```for``` and ```while``` instructions.

```js
for (let index = 0; index < array.length; index++) {
  const element = array[index]
}

while (condition) {}
```

## Declaring Functions and different types of functions

Here, we have 3 types of declaration:
- Our basic and classic function
- Arrow function (which is a more compact way of declaring a function)
- and Anonymous Function (which is a way to declare a function without a name)

```js
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
```

---
file workingWithArrays.js

## Working with Arrays

We have a lot of methods that can help us with arrays. A few of them are:
- push
- pop()
- forEach()
- map()

You can see more methods [here](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array).

```js
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
```

## Interpolating values into strings

Here is an example of how we can insert the content from a variable inside some string.

```js
const ourAmazingArray = [1, 2, 3, 4, 5]

const showElement = (element, position) =>
  console.log(`The element ${element} is on position ${position}`)

ourAmazingArray.map(showElement)
```

## Working with JSON

Here is a few examples of working with JSON.

```js
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
```

---
file OOP.js

## OOP in JS

Here we have one basic Rectangle class, in which we declare our width and height, in order to create Rectangle instances in the future.

```js
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  showValues() {
    console.log(this.width, this.height)
  }

  calculateArea() {
    console.log(this.width * this.height)
  }
}

const myRectangle = new Rectangle(10, 20)
myRectangle.showValues()
myRectangle.calculateArea()


```

---

## Working with an API

We can use the ```fetch``` method to fetch an API response and then work with the response data.

Example:

```js

const fetchJoke = async (numberOfPhrases) => {
  const phrasesArray = []
  for (let i = 0; i < numberOfPhrases; i++) {
    const phrase = await fetch(URL_TO_FETCH).then((res) => res.json())
    const fetchedPhrase = await phrase
    phrasesArray.push(fetchedPhrase)
  }
  return phrasesArray
}


```

This snippet of code will then, fetch from the API and JSON.parse() the response!
