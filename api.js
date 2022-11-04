const frontEndBaseUrl = "http://127.0.0.1:5500"
const backEndBaseUrl = "http://127.0.0.1:8000"
const TmdbApiImageUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face"


window.onload = () => {
    console.log('로딩되었음')
}

async function handleSignup() {
    const email = document.getElementById("email").value
    const nickname = document.getElementById("nickname").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value
    console.log(email, nickname, password1, password2)

    const response = await fetch('http://127.0.0.1:8000/users/dj-rest-auth/registration/', {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            "email": email,
            "nickname": nickname,
            "password1": password1,
            "password2": password2
        })
    })

    const response_json = await response.json()
    
    console.log(response)
    if (response.status == 201){
        alert(response_json["detail"])
            window.location.replace(`${frontEndBaseUrl}/login.html`);
    }else {
        alert(response_json["email"])
        alert(response_json["password1"])
        alert(response_json["password2"])

    }
}

async function handleLogin() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email, password)

    const response = await fetch('http://127.0.0.1:8000/users/dj-rest-auth/login/', {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })

    const response_json = await response.json()    // responser 값을 json 화

    console.log(response_json)
    if (response.status == 200){
        localStorage.setItem("access", response_json.access_token);  // 로컬스토리지안에 access값 저장
        localStorage.setItem("refresh", response_json.refresh_token); // 로컬스토리지안에 refresh값 저장

        const base64Url = response_json.access_token.split('.')[1];  // 로컬스토리지에 JWT값 저장
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        localStorage.setItem("payload", jsonPayload);

        alert("로그인 성공!")
            window.location.replace(`${frontEndBaseUrl}/home.html`);

    }else {
        //로그인 실패시
        alert(response_json["non_field_errors"])
        // window.location.reload();
    }
}


async function handleLogout(){
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("payload")
    alert("로그아웃 성공!")
        window.location.replace(`${frontEndBaseUrl}/login.html`);
}

async function handleDelete(){   //mock 함수
    const response = await fetch('http://127.0.0.1:8000/users/delete/',{
        headers:{
            "Authorization":"Bearer " + localStorage.getItem("access")
        },
        method:'DELETE',
    })

    if (response.status ==204){
        alert("회원탈퇴 완료!")
        window.location.replace(`${frontEndBaseUrl}/login.html`);
    }

    console.log(response)
}

async function getMovie(){
    const response = await fetch(`${backEndBaseUrl}/articles/`,{
        method:'GET',
    })

    response_json = await response.json()
    return response_json
}



async function getMovieDetail(){
    const response = await fetch(`${backEndBaseUrl}/articles/1/`,{

        method:'GET',
    })

    response_json = await response.json()
    return response_json
}



async function handlePost() {
    const content = document.getElementById("content").value
    const rating = document.getElementById("rating").value
    console.log(content, rating)

    const response = await fetch('http://127.0.0.1:8000/articles/1/comment/', {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            "content": content,
            "rating": rating
        })
    })
}

