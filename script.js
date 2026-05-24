const passwordBox = document.querySelector("#password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const eyeOpen = document.querySelector("#ey-open");
const eyeClose = document.querySelector("#ey-close");
eyeClose.style.display = "none";
// Math.random(): Ek random decimal number (0 se 1 ke beech) nikalta hai.
// upperCase.length: Us number ko capital letters ki kul ginti se multiply karta hai.
// Math.floor(...): Point wale number ko hata kar ek poora number (index) banata hai (jaise (5.7) ko (5) bana dega).
// upperCase[...]: Us poore number wale position se ek capital letter chunata hai.
// password +=: Us chune hue capital letter ko password ke aage jod deta hai.

const allCharacters = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  passwordBox.value = password;

  while (password.length < length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  if (passwordBox.value !== "") {
    passwordBox.select();
    document.execCommand("copy");
    document.querySelector("#copy-msg").innerText = "copied";
    setTimeout(() => {
      document.querySelector("#copy-msg").innerText = "";
    }, 1000);
  }
}

// ye code copy button ke liye hai, jab user copy button pe click karega to copyPassword function chalega aur password ko clipboard me copy kar dega.
const copying = document.querySelector("#copy-img");
copying.addEventListener("click", copyPassword);

// this is for the button to generate the password when clicked
const generateBtn = document.querySelector("#generate-btn");
generateBtn.addEventListener("click", generatePassword);

eyeOpen.addEventListener("click", () => {
  passwordBox.type = "text";
  eyeOpen.style.display = "none";
  eyeClose.style.display = "block";
});

eyeClose.addEventListener("click", () => {
  passwordBox.type = "password";
  eyeOpen.style.display = "block";
  eyeClose.style.display = "none";
});
