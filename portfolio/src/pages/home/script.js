var words = ['I am Rodrigo'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;

var name = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substring(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
    }
    var element = document.getElementsByClassName('words')[0];
    if (element !== undefined) {
      element.innerHTML = part;
    }
  },speed);
};


var word =['Web Developer'],
    part,
    i = 0,
    offset = 0,
    len = word.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speede = 50;

var web = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= word[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = word[i].substring(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
    }
    var elements = document.getElementsByClassName('word')[0];
    if (elements !== undefined) {
        elements.innerHTML = part;
    }
  },speede);
};


//when the page loads, call the function
window.onload = function () {
    name();
    web();
    };


    //function that that makes a aniamtion when he changes the page
    function changePage() {
      var element = document.getElementById("home");
      element.classList.add("animation");
    }
    