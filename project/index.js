
let topbutton = document.getElementById("topbutton");


window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function top() {
  document.documentElement.scrollTop = 0;
}