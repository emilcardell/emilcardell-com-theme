var desktopShowPosition = 400;
var mobileShowPosition = 149;
var delta = 5;
var didScroll = false;
var lastScrollPostion = 0;

var getShowPosition = function() {
    if(window.innerWidth < 500) {
        return mobileShowPosition;
    }

    return desktopShowPosition;
}

window.onscroll = function() {
    didScroll = true;


    var currentPosition = window.pageYOffset;
    var displacement = -Math.abs((getShowPosition()-(getShowPosition()-currentPosition))/2);
    //console.log(displacement + "px");
};

setInterval(function() {
  if (didScroll) {
      hasScrolled();
      didScroll = false;
  }
}, 100);

function hasScrolled() {
  var currentPosition = window.pageYOffset;
  //console.log(lastScrollPostion - currentPosition);
  if(Math.abs(lastScrollPostion - currentPosition) <= delta) {
      lastScrollPostion = currentPosition;
      return;
  }

  if(currentPosition < getShowPosition()){
      document.getElementById("nav").className = "nav";
      document.getElementById("content").className = "content";
      document.getElementById("logo").className = "nav__logo nav__logo--hidden";
      lastScrollPostion = currentPosition;
      return;
  }

  if (currentPosition > lastScrollPostion && currentPosition > 550 ) {
      document.getElementById("nav").className = "nav nav--fixed-hidden";
      lastScrollPostion = currentPosition;
      return;
  } else {
      document.getElementById("nav").className = "nav nav--fixed";
      document.getElementById("logo").className = "nav__logo";
      document.getElementById("content").className = "content content-with-sticky-menu";
      lastScrollPostion = currentPosition;
      return;
  }

  lastScrollPostion = currentPosition;
}
