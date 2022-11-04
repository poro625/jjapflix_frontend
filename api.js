const frontEndBaseUrl = "http://127.0.0.1:5500"
const backEndBaseUrl = "http://127.0.0.1:8000"

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
        localStorage.setItem("access", response_json.access);  // 로컬스토리지안에 access값 저장
        localStorage.setItem("refresh", response_json.refresh); // 로컬스토리지안에 refresh값 저장

        const base64Url = response_json.access.split('.')[1];  // 로컬스토리지에 JWT값 저장
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        localStorage.setItem("payload", jsonPayload);

        alert("로그인 성공!")
            window.location.replace(`${frontEndBaseUrl}/home.html`);

    }else {
        //로그인 실패시
        alert(response_json["detail"])
        window.location.reload();
    }
}