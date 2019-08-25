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