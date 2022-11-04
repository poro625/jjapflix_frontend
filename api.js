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

    console.log(response)
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

    console.log(response)
}