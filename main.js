// var script = document.createElement('script');
// script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

var allButtons = $('#buttons > span')
console.log(allButtons)

for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function(x) {
    var index = $(x.currentTarget).index()
    var p = index * -300
    $('#images').css({
      transform: 'translate(' + p + 'px)'
    })
    n = index
    activeButton(allButtons.eq(n))
  })
}



var n = 0;
var size = allButtons.length
allButtons.eq(n % size).trigger('click')


var timerId = setTimer()

function setTimer() {
  return setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
  }, 3000)
}

function activeButton($button) {
  $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}

$('.window').on('mouseenter', function() {
  window.clearInterval(timerId)
})

$('.window').on('mouseleave', function() {
  timerId = setTimer()
})