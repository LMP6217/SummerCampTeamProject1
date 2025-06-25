
// This is the circle going around//
    // let circleX = 100;
    // let circleY = 150;
    // let circleRadius = 90;
    // let angle = (0);

    // function setup() {
    // createCanvas(200, 250);
    // angleMode(DEGREES);
    // describe();
    // }

    // function draw() {
    // background(0);
    // let angle = frameCount % 360;
    // noFill();
    // strokeWeight(20);

    // let pointX = circleX - circleRadius * sin(angle);
    // let pointY = circleY - circleRadius * cos(angle);
    // fill('');
    // circle(pointX, pointY, 30);
    // }

//This is for the tabs//
function openAnim(evt, animName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "active");
  }
  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();