function scrollAppear() {
  var mustAppearDiv = document.querySelector(".must-appear-div");
  var mustAppearDivPosition = mustAppearDiv.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (mustAppearDivPosition < windowHeight * 0.7) {
    mustAppearDiv.classList.add("show-appear-div");
  } else {
    mustAppearDiv.classList.remove("show-appear-div");
  }
}

window.addEventListener("scroll", scrollAppear);
