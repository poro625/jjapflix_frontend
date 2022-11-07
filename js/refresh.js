window.onload = async function loadMovieRefresh(){

    let User_payload = JSON.parse(localStorage.getItem('payload'))
    if (User_payload === undefined ||  User_payload === null){

        alert("홈페이지는 로그인 후 사용하실 수 있습니다.");
        location.href="http://127.0.0.1:5500/login.html";
        
        
    } else {
    

    movies = await getMovieRefresh()
    const movie_list = document.getElementById("movies")

    movies.forEach(movie =>{
        const newMovie = document.createElement("div");

        const movieImage = document.createElement("img")
        console.log(movie)

        movieImage.setAttribute("src", `${TmdbApiImageUrl}${movie.image}`)

        // movieImage.setAttribute("src"="http://127.0.0.1:5500/articledetail.html/", onclick="getMovieDetail(movie)")
        // movieImage.onclick=function(){getMovieDetail(movie);}

        newMovie.onclick=function() {
            location.href = `home.html?movie=${movie.movie_id}&id=${movie.id}`
        }

        newMovie.appendChild(movieImage)
        movie_list.appendChild(newMovie)
    });
}
}