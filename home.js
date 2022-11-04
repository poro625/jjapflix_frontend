window.onload = async function loadMovie(){
    movies = await getMovie()
    console.log(movies)
    const movie_list = document.getElementById("movies")

    movies.forEach(movie =>{
        const newMovie = document.createElement("div");
        const movieImage = document.createElement("img");
        newMovie.classList.add("movie_main_list")
        movieImage.setAttribute("src", `${TmdbApiImageUrl}${movie.image}`)
        newMovie.appendChild(movieImage)
        movie_list.appendChild(newMovie)

    });
}

