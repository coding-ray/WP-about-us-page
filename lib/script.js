$(document).ready(function() {

});

// Selecting the profile
let profile = document.querySelectorAll(".profile-inner-container");
let getThumbs = Array.from(document.querySelectorAll(".profile-inner-container"));
let change = document.querySelector(".profile-inner-container-change");
let m = window.matchMedia('(max-aspect-ratio: 16/9)');
checkMedia(m);

function checkMedia(media) {
  console.log("hi");
  if (media.matches) {
    for (i = 0; i < profile.length; i++) {
      console.log(profile[i].id);
      profile[i].onclick = function(index) {
        console.log(this.dataset.index);
        change.style.display = "none";
        change.children[0].src = profile[temp].children[0].src;
        change.children[1].innerHTML = profile[temp].children[1].innerHTML;
        change.children[2].innerHTML = profile[temp].children[2].innerHTML;
        profile[temp].style.opacity = 0;
        change.style.display = "block";
      };
    }
    window.onclick = function(event) {
      if (event.target != change) {
        profile[temp].style.opacity = 0.2;
        change.style.display = "none";
      }

    }
  }
}