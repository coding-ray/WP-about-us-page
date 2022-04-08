$(document).ready(function() {

});

// Using DOM to select the profile
var profile = document.querySelectorAll(".profile-inner-container");
var change = document.querySelector(".profile-inner-container-change");
var profileIndex = 0;

// Make sure only 4:3 ratio screen will use this JS setting
// The clicked profile will place in center
// Click the profile photo again and it will back to normal
// Or you can directly click on another profile to display
if (window.matchMedia("(max-aspect-ratio: 4/3)").matches) {
  for (i = 0; i < profile.length; i++) {
    profile[i].children[0].onclick = imgClick;
  }

  function imgClick() {
    let id = $(this).parent().get(0).id;
    switch (id) {
      case "xu":
        profileIndex = 0;
        break;
      case "chen":
        profileIndex = 1;
        break;
      case "huang":
        profileIndex = 2;
        break;
      case "jiang":
        profileIndex = 3;
        break;
      case "li":
        profileIndex = 4;
        break;
    }
    change.classList.remove("fade-in");
    change.children[0].src = profile[profileIndex].children[0].src;
    change.children[1].innerHTML = profile[profileIndex].children[1].innerHTML;
    change.children[2].innerHTML = profile[profileIndex].children[2].innerHTML;
    change.classList.add("fade-in");
    for (i = 0; i < profile.length; i++) {
      profile[i].style.opacity = 0.5;
    }
    profile[profileIndex].style.opacity = 0;
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

/* Title fade in after the page is fully loaded. */
window.addEventListener('load', () => {
  $("h1, h2").animate({ opacity: 1 }, 1000);
})