(function () {
  let screen = document.querySelector(".window");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".button3");
  let clear = document.querySelector(".button4");
  // let theme= document.querySelectorAll("theme");
  let themes = document.getElementsByName("themes");
  var back = document.querySelector(":root");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.innerHTML;
      screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "Please Enter";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });

  themes.forEach((theme) => {
    theme.addEventListener("change", () => {
      let value = document.getElementById("themes").selectedIndex;
      if (value == 1) {
        back.style.setProperty("--bg-color", "  #00264d");
        back.style.setProperty("--body", "#ccebff");
      }
      if (value == 0) {
        back.style.setProperty("--bg-color", "#22252d");
        back.style.setProperty("--body", "antiquewhite");
      }
      if (value == 2) {
        back.style.setProperty("--bg-color", "#800040");
        back.style.setProperty("--body", "#ffe6f2");
      }
    });
  });
})();
