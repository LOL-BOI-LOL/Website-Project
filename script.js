const imgEnlarged = document.getElementById('imgEnlarged');
const divPopUp = document.getElementById('divPopUp');
const divBlur = document.getElementById('divBlur');
const imgs = document.getElementsByTagName('IMG');

divBlur.addEventListener('click', scrnUnblur);

for(i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', enlargeImg);
}
function scrnUnblur() {
  divPopUp.style.display = 'none';
  divBlur.style.display = 'none';
  imgEnlarged.src = '';
  imgEnlarged.margin = '';
}
function enlargeImg() {
  imgEnlarged.src = this.src;
  divPopUp.style.display = 'block';  
  divBlur.style.display = 'block';
  imgEnlarged.style.margin = (((window.innerHeight - parseInt(window.getComputedStyle(imgEnlarged).height.split('p').shift()))/2)-1).toString() + 'px ' + ((((window.innerWidth - parseInt(window.getComputedStyle(imgEnlarged).width.split('p').shift()))/2)-1).toString() + 'px');
}

const time = 10;
const warn = 0;

function changeColor(colour) {
  document.getElementById("body").style.background = colour;
}
function randomHEX() {
  color2 = '#';
  for(i=0;i<6;i++){
    color3 = Math.floor(Math.random()*16);
    if(color3 == 10){
      color3 = 'A';
    }else if(color3 == 11){
      color3 = 'B';
    }else if(color3 == 12){
      color3 = 'C';
    }else if(color3 == 13){
      color3 = 'D';
    }else if(color3 == 14){
      color3 = 'E';
    }else if(color3 == 15){
      color3 = 'F';
    }else {
      color3 = color3.toString();
    }
    color2 = color2.concat(color3);
  }
  changeColor(color2);
}
function epilepsy() {
  warning();
}
function cancel() {
  clearInterval(e);
  changeColor('white');
}
function slowing() {
  randomHEX();
  if(time<550) {
    setTimeout(slowing,time);
    time += 10;
  }else{
    time = 10;
    changeColor('white');
  }
}
function warning() {
  setTimeout(warning1,500);
  setTimeout(warning2,1000);  
  setTimeout(warning3,1500);
}
function warning1() {
  document.getElementById("warning").style.display = "block";
}
function warning2() {
  document.getElementById("warning").style.display = "none";
}
function warning3() {
  if(warn < 3) {
    warn += 1;
    warning();
  }else{
    warn = 0;
    e = setInterval(randomHEX,10);
    setTimeout(cancel,1000)
  }
}
