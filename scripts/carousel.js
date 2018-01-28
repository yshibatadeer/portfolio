$(function() {
  $('.carousel').slick({
    arrows: false, // 別のスライドと連携したいときにクラス名を指定
    infinite: true, // スライドをループさせるか
    centerMode: true, // 左右のスライドをチラ見せさせる幅
    variableWidth: true, // 横幅がバラバラなスライドにするか
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
