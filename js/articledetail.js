TmdbApiImageUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face"

window.onload = async function loadArticle(){
    console.log(location);
    //가공
    const movie_id = location.search.replace("?", "")
    //fetch
    articles = await getMovieDetail(movie_id)
    //console.log(articles)
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

    articles.movie_comment.forEach(comment => {

        const newContent = document.createElement("div");
        const newRating = document.createElement("div");
        const newButton = document.createElement("button");
        newButton.innerText = "삭제"
        newButton.onclick=function(){MovieCommentDelete(comment,movie_id);}
        newContent.innerText = comment.content
        newRating.innerText = comment.rating
        articles_ht.appendChild(newContent)
        articles_ht.appendChild(newRating)
        articles_ht.appendChild(newButton)

        });

        const btnSubmit = document.getElementById("btn_submit");
        btnSubmit.onclick=function() {
            handlePost(movie_id);
        };

    
    };

    


