randomColor = function() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
    return color;
};

let intervalId;

function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
}

const startChangingColor = function() {
    if (intervalId == null) {
        intervalId = setInterval(changeBgColor , 1000);
    }
};

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
