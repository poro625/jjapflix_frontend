TmdbApiImageUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face"

window.onload = async function loadMovie(){
    movies = await getMovie()
    const movie_list = document.getElementById("movies")

    movies.forEach(movie =>{
        const newMovie = document.createElement("div");
        const movieImage = document.createElement("img")
        
        movieImage.setAttribute("src", `${TmdbApiImageUrl}${movie.image}`)
        // movieImage.setAttribute("src"="http://127.0.0.1:5500/articledetail.html/", onclick="getMovieDetail(movie)")
        // movieImage.onclick=function(){getMovieDetail(movie);}

        newMovie.onclick=function() {
            location.href = `articledetail.html?${movie.id}`
        }

        newMovie.innerText = movie.title
        newMovie.appendChild(movieImage)
        movie_list.appendChild(newMovie)
    });
}