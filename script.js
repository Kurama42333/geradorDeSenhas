let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#Valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

buttonElement.addEventListener("click", generatePassword);

password.addEventListener("click", () => {
    navigator.clipboard.writeText(password.innerHTML);
    alert("Senha copiada com sucesso!");
});
