TmdbApiImageUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face"

window.onload = async function loadMovie(){
    movies = await getMovie()
    console.log(movies)
    const movie_list = document.getElementById("movies")

    movies.forEach(movie =>{
        const newMovie = document.createElement("div");
        const movieImage = document.createElement("img")
        
        movieImage.setAttribute("src", `${TmdbApiImageUrl}${movie.image}`)
        newMovie.innerText = movie.title
        newMovie.appendChild(movieImage)
        movie_list.appendChild(newMovie)
    });
}