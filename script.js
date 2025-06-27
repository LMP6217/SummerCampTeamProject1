

//This is for the tabs//
function openAnim(evt, animName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " active";
}

const box = document.getElementById('animation-box');

function setAnimation(type) {
  box.className = ''; // this line Reset all animations
  if (type === 'combo') {
    box.classList.add('combo');//this will change the cube fuction as the whole becasue of"cobo"
  } else if (type !== 'none') {
    box.classList.add(type);
  }
}
// Get the element with and click on it
document.getElementById("defaultOpen").click();

