const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercaseE1 = document.getElementById("lowercase");
const uppercaseE1 = document.getElementById("uppercase");
const numberE1 = document.getElementById("numbers");
const symbolsE1 = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn"); // Updated variable name
const copyIcon = document.getElementById("copyIcon");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

generateBtn.addEventListener("click", () => { // Updated event listener variable name
    passBox.value = generatePassword();
});

function generatePassword() {
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercaseE1.checked ? lowercaseLetters : "";
    characters += uppercaseE1.checked ? uppercaseLetters : "";
    characters += numberE1.checked ? numbers : "";
    characters += symbolsE1.checked ? symbols : "";

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

copyIcon.addEventListener("click", () => {
    if (passBox.value !== "" && passBox.value.length >= 10) { // Corrected logical operator
        navigator.clipboard.writeText(passBox.value); // Corrected method name
        copyIcon.innerText = "check";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
        }, 3000);
    }
});
