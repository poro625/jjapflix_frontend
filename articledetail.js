TmdbApiImageUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face"

window.onload = async function loadArticle(){
    articles = await getMovieDetail()
    console.log(articles)
    articles_ht = document.getElementById("article")

    const ImageMovie = document.createElement("div");
    const movieImage = document.createElement("img")
    const newRating = document.createElement("div");
    const newTitle = document.createElement("div");
    
    movieImage.setAttribute("src", `${TmdbApiImageUrl}${articles.image}`)
    newTitle.innerText = articles.title
    newRating.innerText = articles.rating
    ImageMovie.appendChild(movieImage)
    articles_ht.appendChild(ImageMovie)
    articles_ht.appendChild(newRating)
    articles_ht.appendChild(newTitle)
    };
