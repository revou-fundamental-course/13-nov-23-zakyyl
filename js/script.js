const submitButton = document.getElementsByClassName("primary-button"); // jangan pake class ntar kudu kasih urutan array
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const nameOutput = document.getElementById("username");
const emailOutput = document.getElementById("email");
const imageSlider = document.getElementById("slider");

submitButton[0].addEventListener("click", function (event) {
  if (nameInput.value.length != 0 && emailInput.value.length != 0) {
    alert("Selamat datang!");
  }
});

nameInput.addEventListener("input", function (event) {
  if (nameInput.value.length === 0) {
    nameOutput.textContent = "Nama tidak boleh kosong!";
  }
});

emailInput.addEventListener("input", function (event) {
  if (emailInput.value.length === 0) {
    emailOutput.textContent = "Email tidak boleh kosong!";
  }
});

// bikin list image
const images = ["assets/bg.jpg", "assets/bg2.jpg", "assets/bg3.jpg"];

// fungsi penambahan i dan autoslider gambar
var i = 0;
function bannerSlide() {
  i += 1;
  if (i == images.length) {
    i = 0;
  }
  imageSlider.src = images[i];
}

// otomasi run funsi bannerSlide
setInterval(bannerSlide, 1000);

console.log("cobain pull request");
