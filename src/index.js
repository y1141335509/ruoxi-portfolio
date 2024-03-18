cvDownloadButton.addEventListener("click", function () {
  cvPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
  cvPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == cvPopup) {
    cvPopup.classList.remove("show");
  }
});