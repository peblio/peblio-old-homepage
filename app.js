var submitted=false;
window.onload = function() {
  console.log($('#gform'));
  $('#gform').on('submit', function(e) {
    console.log('submitted');
    $('#gform *').fadeOut(2000);
    $('#gform').prepend('Thank you for reaching out to us!');
    });
}
