//skillボタン関連
$(function () {

  $('.skill__modal').eq(0).show();
  $('.skill__modal').hide();
  $('skill__item').eq(8).addClass('skill-active');
  $('.skill__item').each(function () {
    $(this).on('click', function () {
      var index = $('.skill__item').index(this);
      $('.skill__item').removeClass('skill-active');
      $('.skill__item-about').removeClass('about-active');
      $('.skill__item-ok.about-ok-active').removeClass('about-ok-active');
      $(this).addClass('skill-active');
      $('.skill__modal').hide();
      $('.skill__modal-about').hide();
      $('.skill__item-ok').addClass('ok-active');
      $('.card__contact').addClass('card__contact-active');
      $('.skill__modal').eq(index).show();
      return false;
    });
  });

});

//aboutボタン
$(function () {

  $('.skill__item-about').click(function () {
    $('.skill__modal').hide();
    $('.skill__item').removeClass('skill-active');
    $('.skill__item-about').addClass('about-active');
    $('.skill__item-ok').addClass('about-ok-active');
    $('.card__contact').addClass('card__contact-active');
    $('.skill__modal-about').show();
    return false;
  });

});

//okボタン
$(function () {

  $('.skill__item-ok').click(function () {
    $('.skill__item').removeClass('skill-active');
    $('.skill__item-about').removeClass('about-active');
    $('.card__contact').removeClass('card__contact-active');
    $(this).removeClass('ok-active');
    $(this).removeClass('about-ok-active');
    $('.skill__modal').hide();
    $('.skill__modal-about').hide();
    return false;
  });

});

//リサイズ
$(function(){

    $(window).resize(function () {
    var window_size = $(window).width();
    var about_ok_active = $('.about-ok-active');
    if (window_size >= 1023 && about_ok_active) {
      $(about_ok_active).removeClass('about-ok-active');
      $('.about-active').removeClass('about-active');
      $('.skill__modal-about').hide();
    }
  });

});

//サイドバー
$(function () {

  $('.js-menu-btn').on('click', function () {
    $('.js-nav').addClass('open');
    return false;
  });
  $(document).on('click', function (event) {
    $('.js-nav').removeClass('open');
  });
  $('.js-nav').on('click', function (event) {
    event.stopPropagation();
  });

});

//スムーススクロール
$(function () {

  $('a[href^="#"]').on('click', function() {
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, 480, 'swing');
    return false;
  });

});

//メールアラート
$(function () {

  $('.footer__btn').click(function() {
    alert('mail\nyuya.shibata.deer@gmail.com');
    return false;
  });
  $('.card__contact').click(function() {
    alert('mail\nyuya.shibata.deer@gmail.com');
    return false;
  });

});
