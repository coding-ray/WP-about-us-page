$(document).ready(function() {

});

// Using DOM to select the profile
let profile = document.querySelectorAll(".profile-inner-container");
let change = document.querySelector(".profile-inner-container-change");
let temp = 0;

// Make sure only 4:3 ratio screen will use this JS setting
// The clicked profile will place in center
// Click the profile photo again and it will back to normal
// Or you can directly click on another profile to display
if (window.matchMedia("(max-aspect-ratio: 4/3)").matches) {
  for (i = 0; i < profile.length; i++) {
    profile[i].children[0].onclick = imgClick;
  }

  function imgClick() {
    if ($(this).parent().get(0).id == "xu") {
      temp = 0;
    }
    if ($(this).parent().get(0).id == "chen") {
      temp = 1;
    }
    if ($(this).parent().get(0).id == "huang") {
      temp = 2;
    }
    if ($(this).parent().get(0).id == "jiang") {
      temp = 3;
    }
    if ($(this).parent().get(0).id == "li") {
      temp = 4;
    }
    change.children[0].src = profile[temp].children[0].src;
    change.children[1].innerHTML = profile[temp].children[1].innerHTML;
    change.children[2].innerHTML = profile[temp].children[2].innerHTML;
    for (i = 0; i < profile.length; i++) {
      profile[i].style.opacity = 0.5;
    }
    profile[temp].style.opacity = 0;
    change.style.transform = 'scale(2,2)';
    change.style.display = "block";
  }

  window.onclick = function(event) {
    if (event.target == change.children[0]) {
      for (i = 0; i < profile.length; i++) {
        console.log(profile[i]);
        profile[i].style.opacity = 1;
      }
      change.style.display = "none";
    }

  }
} else {
  // The non-4:3 ratio screen will use this JS setting
  // The clicked/hover profile will be opacity=1 while others' opacity become 0.5
  $(".profile-inner-container").mouseenter(function() {
    this.children[2].style.opacity = 1;
    for (i = 0; i < profile.length; i++) {
      if (profile[i] != this)
        profile[i].style.opacity = 0.5;
    }
  }).mouseleave(function() {
    this.children[2].style.opacity = 0;
    for (i = 0; i < profile.length; i++) {
      if (profile[i] != this)
        profile[i].style.opacity = 1;
    }
  });
}
window.addEventListener('load', () => {
  $("h1, h2").animate({ opacity: 1 }, 1000);
})
