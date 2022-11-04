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

    articles.movie_comment.forEach(comment => {

        const newComment = document.createElement("div");
        const newRating = document.createElement("div");
        const newButton = document.createElement("button");
        newButton.innerText = "삭제"
        newComment.innerText = comment.content
        newRating.innerText = comment.rating
        articles_ht.appendChild(newComment)
        articles_ht.appendChild(newRating)
        articles_ht.appendChild(newButton)
        
    });
    
    articles_ht.appendChild(newComment)
    };

// window.onload = async function loadComment(){
//     comments = await handlePost()
//     console.log(comments)
//     comments_list = document.getElementById("comment")
//     comments.forEach(commented => {
//         const newRating = document.createElement("div");
//         const newContent = document.createElement("div");

//         newContent.innerText = commented.content
//         newRating.innerText = commented.rating

//         comments_list.appendChild(newRating)
//         comments_list.appendChild(newContent)

        
//     });
        


