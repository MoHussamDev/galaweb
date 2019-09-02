// var $window = $(window); 
// var $sidebar = $("#stick"); 
// var $sidebarHeight = $sidebar.innerHeight();   
// var $footerOffsetTop = $(".footer1").offset().top; 
// console.log($sidebarHeight, $window.scrollTop(), $footerOffsetTop)
// var $sidebarOffset = $sidebar.offset();

// var appear = false;
// $('#idTabsi').hide()
// $(document).on('scroll', function () {
//     if ($(this).scrollTop() >= $('#idTabs').offset().top) {
//        appear = true;
//         $('#idTabsi').show()
//         $('#stick').addClass('fixed');

      
//     }else{
//         appear = false;
//         $('#idTabsi').hide()
//         $('#stick').removeClass('fixed');

//     }
//     if ($window.scrollTop() + $sidebarHeight > $footerOffsetTop -200 ) {
//         $sidebar.css({ "top": - ($window.scrollTop() + $sidebarHeight - $footerOffsetTop + 200) });
//     } else {
//         $sidebar.css({ "top": "0", });
//     }    
// })


// var summary = new Waypoint.Inview({
//     element: document.getElementById('suma'),
//     entered: function () {
//         deleteAllActive();
//         addActive("#summary");

//     }
// })
// var inc = new Waypoint.Inview({
//     element: document.getElementById('whatInc'),
//     entered: function () {
//         deleteAllActive();
//         addActive("#included");

//     }
// })
// var daybyday = new Waypoint.Inview({
//     element: document.getElementById('daysEntered'),
//     entered: function () {
//         deleteAllActive();
//         addActive("#daybyday");

//     },
//     offset: '700px'
// })
// var accomTag = new Waypoint.Inview({
//     element: document.getElementById('accomTag'),
//     entered: function () {
//         deleteAllActive();
//         addActive("#hotels");

//     },
// })
// var accomTag = new Waypoint.Inview({
//     element: document.getElementById('album'),
//     entered: function () {
//         deleteAllActive();
//         addActive("#photos");

//     },
// })
// var accomTag = new Waypoint.Inview({
//     element: document.getElementById('pricesTa'),
//     entered: function () {
//         deleteAllActive();
//         addActive("#price");

//     },
// })



// // var waypoint = new Waypoint({

// // })

// function deleteAllActive(){
  
//     $("#idTabsi .active").removeClass("active");
// }
// function addActive(param){
//     $("#idTabsi "+ param).addClass("active");
// }

// var openMod = document.getElementById("openMod");
// var modal = document.getElementById("modal");
// var custrip = document.getElementById("custrip");
// var closeModal = document.getElementById("closeModal");
// openMod.addEventListener("click",function(){
  
//     TweenMax.to(modal, .3, { autoAlpha: 1 });
//     TweenMax.to(custrip, .4, { top:"50px",autoAlpha: 1 })
// })
// closeModal.addEventListener("click",function(){
//     TweenMax.to(custrip, .4, { top: "-50px", autoAlpha: 0 }) 
//     TweenMax.to(modal, .3, { autoAlpha: 0 });
// })  
// function make(){
//     TweenMax.to(modal, .3, { autoAlpha: 1 });
//     TweenMax.to(custrip, .4, { top:"50px",autoAlpha: 1 })

// }

