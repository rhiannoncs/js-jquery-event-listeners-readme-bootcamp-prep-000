function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass("tasty");
  })
}

function pressIt() {
  $("form").on('keydown', function(key) {
    if(key.which == )
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
