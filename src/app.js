import "./style.css";

const words = ["fish", "bear", "lion", "duck", "frog"];

const choosenWord = words[Math.floor(Math.random() * words.length)];
console.log(choosenWord);

const displayWord = Array(4).fill("_");

let error = 1;

window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").textContent = displayWord.join("  ");

  document.querySelector(".chars").addEventListener("click", function (event) {
    debugger;
    if (event.target.classList.contains("button")) {
      console.log(event.target.textContent);

      const inputChar = event.target.textContent;
      const idx = choosenWord.indexOf(inputChar);

      if (error == 5) {
        alert(` Game over! The word was ${choosenWord}. Restarting Again.`);
        window.location.reload();
      }

      event.target.setAttribute("disabled", "");

      if (idx !== -1) {
        displayWord[idx] = inputChar;
        document.querySelector(".guess").textContent = displayWord.join("  ");
        //   this.disabled = "";
      } else {
        document.querySelectorAll(`.pic-part-${error}`).forEach((item) => {
          item.style.display = "block";
        });
        error += 1;
      }

      if (checkScore() === 0) {
        alert(
          "Congratulations! You've guess the correct animal. Restarting again"
        );

        window.location.reload();
      }
    }
  });
});

function checkScore() {
  return displayWord.reduce((total, current) => {
    if (current == "_") total += 1;
    return total;
  }, 0);
}
