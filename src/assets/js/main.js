var menu = ['Slide 1', 'Slide 2', 'Slide 3']
var mySwiper = new Swiper ('.swiper-container', {
    // If we need pagination
    loop:true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' +  '</span>';
        },
    }
  })
  var swiper = new Swiper('.sliderOraGala', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var swiper = new Swiper('.vertical-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // var swiper = new Swiper('.HotTravelPackagesCards', {
  //   slidesPerView:6,
  //   // width:2000,
  //   setWrapperSize:true,
  //   freeModeSticky:true,
  //   freeMode:true,
  //   spaceBetween:200,
  //   slidesOffsetBefore:50,
  //   loop:true,
  //   autoplay:{
  //     delay: 3000,
  //   },
  //   breakpoints: {
  //     1240: {
  //       slidesPerView: 4,

  //     },
  //     1600: {
  //       slidesPerView:5,

  //     },
  //     1450: {
  //       slidesPerView: 4,

  //     },
  //   }
  // });

  $(".HotTravelPackagesCards").hover(function() {
    swiper.autoplay.stop();
}, function() {
    swiper.autoplay.start();
});
  // var prevSetup = Selectize.prototype.setup;
//   Selectize.prototype.setup = function () {
//     prevSetup.call(this);

//     // This property is set in native setup
//     // Unless the source code changes, it should
//     // work with any version
//     this.$control_input.prop('readonly', true);
// };

  $('.desti').selectize({
    addPrecedence:true
  })