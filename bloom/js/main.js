$(document).ready(function(){
    //FILTER CARDS//
    $('#search').keyup(function (){
        $('.card-container').removeClass('d-none');
        var filter = $(this).val(); // get the value of the input, which we filter on
        $('.container').find('.card .card-body:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
    });
});


