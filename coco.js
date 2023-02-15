let size = 24
let errorDiv = `
<div class="error">
  <div class="title">Critical Error
    <button class="close-button">X</button>
  </div>
  <div class="message">
    <img src="http://www.routinebot.com/wp-content/uploads/2009/06/error.png"/>
    An error has occurred while trying to display an error message.
  </div>
  <button class="ok">
    <span>OK</span>
  </button>
</div>`;

function showWarning(size) {
  var warning = document.createElement("div");
  // warning.append(errorDiv)
  // warning.style.position = "fixed";
  // warning.style.top = "0";
  // warning.style.bottom = "0";
  // warning.style.left = "0";
  // warning.style.width = "100%";
  // warning.style.height = "100%";
  // warning.style.backgroundColor = "red";
  // warning.style.zIndex = "9999";
  warning.innerHTML = errorDiv
  // warning.innerHTML = `<p style='color:white; font-size: ${size}px; text-align: center; padding: 20px;'>WARNING!</p>`;
  document.body.append(warning);
}

let interval = setInterval(() => {
  size = size * 1.5
  var audio = new Audio('coco.mp3');
  var error = new Audio('error.mp3');
  error.play()
  if (size > 200) {
    audio.play()
    clearInterval(interval)
  }
  showWarning(size)
}, 3000)


// $('.error').draggable();

// var i;
// var myErrors = 100;
// var error = '<div class="error">' + $('.error').html() + '</div>',
//     	x = window.innerWidth / 3,
//     y = window.innerHeight / 3;

function duplicateError() {
  //   $('body').append(error);
  //   $('.error').last()
  //     .css({
  //       top: y + 'px',
  //       left: x + 'px'
  //     })
  //   	.draggable();
  //   x+=4; y+=4;
  showWarning(10)
}
setTimeout(() => {
  document.querySelector("body").addEventListener("click", function (event) {
    if (event.target.matches(".ok") || event.target.matches(".close-button")) {
      duplicateError();
      setTimeout(function () {
        for (var i = 1; i < myErrors; i++) {
          setTimeout(function () {
            duplicateError();
          }, 50 * i);
        }
      }, 3000);
    }
  });
}, 1000)

// reload page after 8 sec
setTimeout(function () {
  // location.reload();
}, 8000);