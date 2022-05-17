// const BASE_URL = "https://www.algoexpert.io/api/fe/glossary-suggestions";
// const input = document.querySelector("#typeahead");
// const suggestionList = document.getElementById("suggestions-list");

// input.addEventListener("input", getLists);

// async function getLists(){
//     const url = new URL(BASE_URL);
//     url.searchParams.set("text", input.value);
//     let response = await fetch(url);
//     let result = await response.json();
//     console.log(result)
//     if(result && result.length > 0){
//         result.forEach((val) => {
//             let list = document.createElement("li");
//             list.innerText = val;
//             suggestionList.appendChild(list)
//         })
//     }
    
// }

const BASE_URL = "https://www.algoexpert.io/api/fe/glossary-suggestions";

let timeoutID;

const input = document.getElementById("typeahead");
const suggestionsList = document.getElementById("suggestions-list");
input.addEventListener("input", onType);

function onType() {
  if (input.value.length === 0) {
    clearSuggestions();
    return;
  }

  clearTimeout(timeoutID);
  timeoutID = setTimeout(fetchAndAppendSuggestions, 500);
}

async function fetchAndAppendSuggestions() {
  const url = new URL(BASE_URL);
  url.searchParams.set("text", input.value);
  const response = await fetch(url);
  const suggestions = await response.json();

  const fragment = document.createDocumentFragment();
  suggestions.forEach((suggestion) => {
    fragment.appendChild(createSuggestionElement(suggestion));
  });
  suggestionsList.replaceChildren(fragment);
}

function createSuggestionElement(suggestion) {
  const suggestionElement = document.createElement("li");
  suggestionElement.textContent = suggestion;
  suggestionElement.addEventListener("click", () => {
    input.value = suggestion;
    clearSuggestions();
  });
  return suggestionElement;
}

function clearSuggestions() {
  clearTimeout(timeoutID);
  suggestionsList.innerHTML = "";
}

// Lessons Learned
// replaceChildren
// innerHTML vs textContent vs innerText