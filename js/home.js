
window.onload = async function loadMovieRecommend(){

    let User_payload = JSON.parse(localStorage.getItem('payload'))
    if (User_payload === undefined ||  User_payload === null){

        location.href="http://127.0.0.1:5500/login.html";
    } else {

    const result = location.search.replace("?movie=", "").replace("id=","").split("&")
    const movie_id = result[0]
    const id = result[1]
    
    articles = await getMovieDetail(id)
    movies = await getMovieRecommend(movie_id)


    mainImage = document.getElementById("mainimage")
    mainMovieInfo = document.getElementById("mainmovieinfo")

    // 영화 메인 이미지(홈)
    const imageMovie = document.createElement("div");
    const movieImage = document.createElement("img")
    movieImage.setAttribute("src", `https://www.themoviedb.org/t/p/original/${articles.image}`)
    imageMovie.appendChild(movieImage)
    mainImage.appendChild(imageMovie)

    // 영화 메인 정보(홈)

    const titleMovie = document.createElement("h1");
    const userMovie = document.createElement("h3");
    const descMovie = document.createElement("p");
    titleMovie.innerText = articles.title
    userMovie.innerText = "누구 님이 관심있는 영화 입니다."
    descMovie.innerText = articles.description
    mainMovieInfo.appendChild(titleMovie)
    mainMovieInfo.appendChild(userMovie)
    mainMovieInfo.appendChild(descMovie)


    // 관심 컨텐츠
    const movie_list = document.getElementById("movies")

    movies.forEach(movie =>{
        const newMovie = document.createElement("div");
        newMovie.classList.add("item");

        const movieImage = document.createElement("img")


        movieImage.setAttribute("src", `${TmdbApiImageUrl}${movie.image}`)


        newMovie.onclick=function() {
            location.href = `articledetail.html?${movie.id}`
        }

        newMovie.appendChild(movieImage)
        movie_list.appendChild(newMovie)
    });
    
}

function mainMovieButton () {
    const result = location.search.replace("?movie=", "").replace("id=","").split("&")
    const id = result[1]

    location.href = `articledetail.html?${id}`
}
}