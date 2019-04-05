$(document).ready(function(){
    //FILTER CARDS (SEARCH)//
    $('#search').keyup(function (){
        $('.card-container').removeClass('d-none');
        var filter = $(this).val(); // get the value of the input, which we filter on //
        $('.container').find('.card .card-body:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
    });

    // DROPDOWN MENU FILTER //
    var $btns = $('.btn-partis').click(function() {
        if (this.id == 'all') {
          $('#parent > div').fadeIn(500);
        } else {
          var $el = $('.' + this.id).fadeIn(500);
          $('#parent > div').not($el).hide();
        }
        $btns.removeClass('active');
        $(this).addClass('active');
    });

    // RANKING PER VALUE //
    $('#rankdecroissant').click(function() {
      $('.ranking-group').find('.card-container').sort(function(a, b) {
        return +b.dataset.percentage - +a.dataset.percentage;
      }).appendTo($('.ranking-group'));
    })

    $('#rankcroissant').click(function() {
      $('.ranking-group').find('.card-container').sort(function(a, b) {
        return +a.dataset.percentage - +b.dataset.percentage;
      }).appendTo($('.ranking-group'));
    })
    
    $('#rankAtoZ').click(function() {
      $('.ranking-group').find('.card-container').sort(function(a, b) {
        return +b.dataset.alphabetical - +a.dataset.alphabetical;
      }).appendTo($('.ranking-group'));
    })

    // BACK TO TOP BUTTON //
    var btn = $('#button-backToTop');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

});


