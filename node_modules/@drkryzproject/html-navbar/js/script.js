init();

function ChangeTheme() {
  if (getTheme() === "light") {
    document.body.style.backgroundColor = "#222";
    document.getElementById("icon").classList.remove("fa-moon");
    document.getElementById("icon").classList.add("fa-sun");

    localStorage.setItem("theme", "dark");
  } else {
    document.body.style.backgroundColor = "#fff";
    document.getElementById("icon").classList.remove("fa-sun");
    document.getElementById("icon").classList.add("fa-moon");

    localStorage.setItem("theme", "light");
  }
}

let isOpen = false;

function OpenSideBar() {
  if (screen.width <= 720) {
    if (isOpen) {
      $("#sidebar").css("animation-name", "closing-min");

      setTimeout(() => {
        $("#sidebar").css("display", "none");
        isOpen = false;
      }, 500);
    } else {
      $("#sidebar").css("animation-name", "opening-min");
      $("#sidebar").show();

      isOpen = true;
    }
  } else {
    if (isOpen) {
      $("#sidebar").css("animation-name", "closing");

      setTimeout(() => {
        $("#sidebar").css("display", "none");
        isOpen = false;
      }, 500);
    } else {
      $("#sidebar").css("animation-name", "opening");
      $("#sidebar").show();

      isOpen = true;
    }
  }
}

$("#sidebtn").mouseover(function () {
  if (screen.width <= 720) return;

  if (!isOpen) {
    $("#sidebar").css("animation-name", "opening");
    $("#sidebar").show();

    isOpen = true;
  }
});

$("#sidebar").mouseleave(function () {
  if (screen.width <= 720) return;

  if (isOpen) {
    $("#sidebar").css("animation-name", "closing");

    setTimeout(() => {
      $("#sidebar").css("display", "none");
      isOpen = false;
    }, 500);
  }
});

function getTheme() {
  return localStorage.getItem("theme").toString();
}

function init() {
  localStorage.setItem("theme", "light");
}
