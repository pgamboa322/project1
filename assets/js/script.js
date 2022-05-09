
var movieName = document.querySelector("#movie-title");
var moviePoster = document.querySelector("#movie-poster");
var movieButton = document.querySelector("#movieBtn");

movieButton.addEventListener("click", () => {
    movieSelector ();
});

var movieSelector
fetch('https://api.themoviedb.org/3/movie/popular?api_key=645a5598111297428ddc7c021bbbf249&language=en-US&page=1')
.then(function(data) {
    return data.json()


.then(function(data) {
    console.log(data);
    var randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
    console.log(randomMovie);
    var title = randomMovie.title.split(" ").join("");
    var poster = randomMovie.poster_path.split(" ").join("");
    movieName.textContent = randomMovie.title;
    
    

    console.log(title) 

})

})
let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendAPIRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let APP_ID = "9d285ea6";
  let API_KEY = "58cefa4fc0dc6f6fad845675e5e7153a";
  let response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=food&app_id=${APP_ID}&app_key=${API_KEY}&mealType=Dinner&dishType=Main course&imageSize=LARGE&random=true`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

//function that does something with the data received from the API.
function useApiData(data) {
  document.querySelector("#dinnerSection").innerHTML = 
  `<div class="tile is-child box">
    <p class="title">${data.hits[0].recipe.label}</p>
    <img src="${data.hits[0].recipe.image}" alt="recipe image"/></figure>
    <p>${data.hits[0].recipe.ingredientLines}</p>
            <a href="${data.hits[0].recipe.url}" class="card-footer-item">Go To Recipe</a>
            <br>
    </div>`;
}
