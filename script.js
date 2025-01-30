let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let passwordElement = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let valor = document.querySelector("#Valor");
let copyInstruction = document.querySelector("#copy-instruction");

sliderElement.oninput = function() {
    valor.textContent = this.value;
}

function generatePassword() {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    let passwordLength = sliderElement.value;

    for(let i = 0; i < passwordLength; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    containerPassword.classList.remove("hide");
    passwordElement.textContent = password;
}

buttonElement.addEventListener("click", generatePassword);

passwordElement.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordElement.textContent);
    copyInstruction.innerHTML = "Senha copiada com sucesso! 👍";
});

// ... existing code ...

passwordElement.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordElement.textContent);
    passwordElement.textContent = "";
    
    let timeLeft = 10;
    
    // Atualiza o contador a cada segundo
    const countdownInterval = setInterval(() => {
        copyInstruction.innerHTML = `Autodestruição em ${timeLeft}`;
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            copyInstruction.innerHTML = "Clique na senha para copiar 👆";
            containerPassword.classList.add("hide");
        }
    }, 1000);
});