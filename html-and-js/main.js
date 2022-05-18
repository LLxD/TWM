import "./style.css"

const URL_TO_FETCH = "api/jokes/random"

const fetchJoke = async (numberOfPhrases) => {
  const phrasesArray = []
  for (let i = 0; i < numberOfPhrases; i++) {
    const phrase = await fetch(URL_TO_FETCH).then((res) => res.json())
    const fetchedPhrase = await phrase
    phrasesArray.push(fetchedPhrase)
  }
  return phrasesArray
}

let ourHTML

const trigger = async (numberOfPhrases) => {
  document.getElementById("loading").innerHTML = "Carregando"
  ourHTML = await fetchJoke(numberOfPhrases).then((phrases) =>
    phrases.map(
      (phrase) => `
 <li><div class="item">
  <img class="icon" src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"><h4>${phrase.value}</h4></div></li>
  `
    )
  )
  document.getElementById("loading").innerHTML = ""
  document.getElementById("list").innerHTML = ourHTML
}

document.getElementById("app").innerHTML = `
<h1>Hello Vite!</h1>
`

document
  .getElementById("button-fetch")
  .addEventListener("click", async () => await trigger(10))
