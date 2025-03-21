var countDownDate = new Date("April 30, 2025 18:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    '<span id="day">' +
    days +
    "</span>" +
    '<span id="hours">' +
    hours +
    "</span>" +
    '<span id="minutes">' +
    minutes +
    "</span>" +
    '<span id="seconds">' +
    seconds +
    "</span>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
    document
      .getElementById("after-expire")
      .setAttribute("id", "offer-expire-text");
    document.getElementById("offerblur").style.filter = "blur(5px)";
    document.getElementById("offer-expire-text").innerHTML =
      "تخفیف به پایان رسیده است";
  }
}, 1000);
