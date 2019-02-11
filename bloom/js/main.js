//FILTER CARD//
$(document).ready(function(){
    console.log('jquery loaded')
    $('#search').keyup(function (){
        $('.card-container').removeClass('d-none');
        var filter = $(this).val(); // get the value of the input, which we filter on
        $('.container').find('.card .card-body:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
    });
});


//FLIP CARD//
var card = document.querySelector(".flip-card");
var playing = false;

card.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.15}, {value: 1, delay: 150}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 500,
    complete: function(anim){
       playing = false;
    }
  });
});