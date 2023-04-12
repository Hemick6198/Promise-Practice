const emailRef = document.querySelector(".email");


fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        return response.json();
})
    .then((data) => {
        emailRef.innerHTML = data.email
    })