var countDownDate = new Date("April 2, 2025 18:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // document.getElementById("demo").innerHTML =
  //   '<span id="day">' +
  //   days +
  //   "</span>" +
  //   '<span id="hours">' +
  //   hours +
  //   "</span>" +
  //   '<span id="minutes">' +
  //   minutes +
  //   "</span>" +
  //   '<span id="seconds">' +
  //   seconds +
  //   "</span>";

  var z = document.getElementsByClassName("demos");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
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
  }

  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "";
    var y = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
      y[i].innerHTML = "";
    }

    // document
    //   .getElementById("after-expire")
    //   .setAttribute("id", "offer-expire-text");
    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < z.length; i++) {
      g[i].classList.add("offer-expire-text");
    }

    // document.getElementById("offer-expire-text").innerHTML =
    //   "تخفیف به پایان رسیده است";
    var d = document.getElementsByClassName("offer-expire-text-inner");
    for (var i = 0; i < z.length; i++) {
      d[i].innerHTML = "تخفیف به پایان رسیده است";
    }

    // document.getElementById("offerblur").style.filter = "blur(5px)";
    var t = document.getElementsByClassName("offerblur");
    for (var i = 0; i < z.length; i++) {
      t[i].style.filter = "blur(5px)";
    }
  }
}, 1000);

//fire owl carousel plugin
$(".owl-carousel").owlCarousel({
  loop: true,
  rtl: true,
  autoplay: true,
  nav: false,
  rewind: true,
  slideBy: 2,
  autoHeight: false,
  autoplayTimeout: 3000,
  stagePadding: 35,
  margin: 5,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      loop: true,
    },
    600: {
      items: 3,
      loop: true,
    },
    1000: {
      items: 5,
      loop: true,
    },
  },
});

//zoomy options
var urls = [
  "assets/img/tlou1.png",
  "assets/img/tlou2.png",
  "assets/img/tlou3.png",
  "assets/img/tlou4.png",
];

$("#el").zoomy(urls);
