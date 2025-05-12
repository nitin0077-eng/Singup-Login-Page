



document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const signUpBtn = document.querySelector("#login-container .sign span");
    const loginBtn = document.querySelector("#signup-container .sign span");

    signUpBtn.addEventListener("click", function () {
        wrapper.classList.add("flipped");
        setTimeout(() => {
            document.getElementById("signup-container").style.display = "block";
            document.getElementById("login-container").style.display = "none";
        }, 300); 
    });

    loginBtn.addEventListener("click", function () {
        wrapper.classList.remove("flipped");
        setTimeout(() => {
            document.getElementById("login-container").style.display = "block";
            document.getElementById("signup-container").style.display = "none";
        }, 300);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector("#login-container button");
    const signUpBtn = document.querySelector("#signup-container button");

    function clearInputs() {
        document.querySelectorAll("input").forEach(input => input.value = "");
    }

    loginBtn.addEventListener("click", function () {
        clearInputs(); 
    });

    signUpBtn.addEventListener("click", function () {
        clearInputs(); 
    });
});