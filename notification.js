// paper-icon-button
console.log('nitfication.js');

window.addEventListener("load", function() {
  document
    .getElementById("play-pause-button")
    .addEventListener("click", function() {
      if (document.getElementById("play-pause-button").title == "play") {
        console.log(document.getElementsByTagName("yt-formatted-string").title);
      }
      console.log("click");
    });

  document
    .getElementsByClassName("left-controls-buttons")
    .addEventListener("click", function() {
      console.log("leftcontrolclick");
    });
});
