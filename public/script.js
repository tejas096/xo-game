let i = 9;
let allbtn = document.querySelectorAll(".mainplay");
let started = false;
let startbtn = document.querySelector(".startbtn");
let heading = document.querySelector("h3");
startbtn.addEventListener("click", () => {
  if (started == false) {
    started = true;
    startbtn.disabled = true;
    heading.innerText = `O move`;
    startbtn.innerText = "Playing ...";
    for (btn of allbtn) {
      btn.innerText = "";
      btn.style.color = "black";
      btn.disabled = false;
    }
  }
});
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
function check() {
  if (
    (btn1.innerText == "X" && btn2.innerText == "X" && btn3.innerText == "X") ||
    (btn1.innerText == "O" && btn2.innerText == "O" && btn3.innerText == "O")
  ) {
    if (i % 2 == 0) {
      heading.innerText = `O Wins The Game 🥳`;
    } else {
      heading.innerText = `X Wins The Game 🥳`;
    }
    btn1.style.color = "red";
    btn2.style.color = "red";
    btn3.style.color = "red";
    startbtn.disabled = false;
    i = 9;
    started = false;
    startbtn.innerText = "Start Game !!";
  } else if (
    (btn1.innerText == "X" && btn4.innerText == "X" && btn7.innerText == "X") ||
    (btn1.innerText == "O" && btn4.innerText == "O" && btn7.innerText == "O")
  ) {
    if (i % 2 == 0) {
      heading.innerText = `O Wins The Game 🥳`;
    } else {
      heading.innerText = `X Wins The Game 🥳`;
    }
    btn1.style.color = "red";
    btn4.style.color = "red";
    btn7.style.color = "red";
    startbtn.disabled = false;
    i = 9;
    started = false;
    startbtn.innerText = "Start Game !!";
  } else if (
    (btn1.innerText == "X" && btn5.innerText == "X" && btn9.innerText == "X") ||
    (btn1.innerText == "O" && btn5.innerText == "O" && btn9.innerText == "O")
  ) {
    if (i % 2 == 0) {
      heading.innerText = `O Wins The Game 🥳`;
    } else {
      heading.innerText = `X Wins The Game 🥳`;
    }
    btn1.style.color = "red";
    btn5.style.color = "red";
    btn9.style.color = "red";
    startbtn.disabled = false;
    i = 9;
    started = false;
    startbtn.innerText = "Start Game !!";
  } else if (
    (btn4.innerText == "X" && btn5.innerText == "X" && btn6.innerText == "X") ||
    (btn4.innerText == "O" && btn5.innerText == "O" && btn6.innerText == "O")
  ) {
    if (i % 2 == 0) {
      heading.innerText = `O Wins The Game 🥳`;
    } else {
      heading.innerText = `X Wins The Game 🥳`;
    }
    btn4.style.color = "red";
    btn5.style.color = "red";
    btn6.style.color = "red";
    startbtn.disabled = false;
    i = 9;
    started = false;
    startbtn.innerText = "Start Game !!";
  } else if (
    (btn7.innerText == "X" && btn8.innerText == "X" && btn9.innerText == "X") ||
    (btn7.innerText == "O" && btn8.innerText == "O" && btn9.innerText == "O")
  ) {
    if (i % 2 == 0) {
      heading.innerText = `O Wins The Game 🥳`;
    } else {
      heading.innerText = `X Wins The Game 🥳`;
    }
    btn7.style.color = "red";
    btn8.style.color = "red";
    btn9.style.color = "red";
    startbtn.disabled = false;
    i = 9;
    started = false;
    startbtn.innerText = "Start Game !!";
  } else if (
    (btn2.innerText == "X" && btn5.innerText == "X" && btn8.innerText == "X") ||
    (btn2.innerText == "O" && btn5.innerText == "O" && btn8.innerText == "O")
  ) {
    if (i % 2 == 0) {
      heading.innerText = `O Wins The Game 🥳`;
    } else {
      heading.innerText = `X Wins The Game 🥳`;
    }
    btn2.style.color = "red";
    btn5.style.color = "red";
    btn8.style.color = "red";
    startbtn.disabled = false;
    i = 9;
    started = false;
    startbtn.innerText = "Start Game !!";
  } else if (
    (btn3.innerText == "X" && btn6.innerText == "X" && btn9.innerText == "X") ||
    (btn3.innerText == "O" && btn6.innerText == "O" && btn9.innerText == "O")
  ) {
    if (i % 2 == 0) {
      heading.innerText = `O Wins The Game 🥳`;
    } else {
      heading.innerText = `X Wins The Game 🥳`;
    }
    btn3.style.color = "red";
    btn6.style.color = "red";
    btn9.style.color = "red";
    startbtn.disabled = false;
    i = 9;
    started = false;
    startbtn.innerText = "Start Game !!";
  } else if (
    (btn3.innerText == "X" && btn5.innerText == "X" && btn7.innerText == "X") ||
    (btn3.innerText == "O" && btn5.innerText == "O" && btn7.innerText == "O")
  ) {
    if (i % 2 == 0) {
      heading.innerText = `O Wins The Game 🥳`;
    } else {
      heading.innerText = `X Wins The Game 🥳`;
    }
    btn3.style.color = "red";
    btn5.style.color = "red";
    btn7.style.color = "red";
    startbtn.disabled = false;
    i = 9;
    started = false;
    startbtn.innerText = "Start Game !!";
  } else if (i == 0) {
    heading.innerText = `Game Draw ...`;
    startbtn.disabled = false;
    i = 9;
    started = false;
    startbtn.innerText = "Start Game !!";
  }
}
for (btn of allbtn) {
  btn.addEventListener("click", function () {
    if (started == true) {
      let btn = this;
      if (i % 2 == 0) {
        btn.innerText = "X";
        btn.disabled = true;
        heading.innerText = `O move`;
      } else {
        btn.innerText = "O";
        btn.disabled = true;
        heading.innerText = `X move`;
      }
      i = i - 1;
      check();
    }
  });
}
