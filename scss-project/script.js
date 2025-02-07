/*  slick slider */

$(".history-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  Infinity: false,
  dots: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 1024,
      setings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        Infinity: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      setings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        Infinity: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      setings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        Infinity: true,
        dots: true,
      },
    },
  ],
});
