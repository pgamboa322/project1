
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
