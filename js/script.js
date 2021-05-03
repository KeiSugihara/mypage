$(function () {
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    // 100pxずつ見える
    centerMode: true,
    centerPadding: "100px",
  });
});
