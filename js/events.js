function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass()
  })
}

$(document).ready(function(){
  getIt();

});
