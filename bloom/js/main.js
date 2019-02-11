$(document).ready(function(){

    //FILTER CARDS//
    console.log('jquery loaded')
    $('#search').keyup(function (){
        $('.card-container').removeClass('d-none');
        var filter = $(this).val(); // get the value of the input, which we filter on
        $('.container').find('.card .card-body:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
    });

    //FLIP CARD//
    $('.flip-card').flip({
      axis: 'x',
      trigger: 'click',
      speed: 350,
    });

});


