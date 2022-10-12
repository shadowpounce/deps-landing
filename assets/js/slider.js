$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 400,
    responsive: {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  })
})
