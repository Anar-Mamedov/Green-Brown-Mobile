// Menü
$(".toggleMenu").on('click', function(){
    $("#mainMenu").toggleClass('open');
  });
// menü son

// on click ile active klası ekleme yine kompenete basarak kaldırma

// $(".card_slider_swipper .shop_icon").on('click', function(){
//   $(this).toggleClass('active');
// });

// kompenente basarak eklenen active clasını her hangi bir yere basarak kaldırma

// $(document).on("click", function (event) {
//   if ($(event.target).closest('.card_slider_swipper .shop_icon').length === 0) {
//     $(".card_slider_swipper .shop_icon").removeClass('active')
//   } 
// });

// kompenente basarken aktive eklenmesi bıraktığında active klasının silinmesi (Çalışmadı)

// $('.card_slider_swipper .shop_icon')
//   .on('mousedown', function() {
//     console.log(1)
//     $(this).addClass('active');
//   })



// share butonu
// Force a hover to see the effect
const share = document.querySelector('.share');

setTimeout(() => {
  share.classList.add("hover");
}, 1000);

setTimeout(() => {
  share.classList.remove("hover");
}, 3000);

$('.card-of-product .share_button').on('click', function() {
  $('.card-of-product .sm-wrapper:visible').toggle('show')
  $(this).parents('.card-of-product').find('.sm-wrapper:hidden').toggle('show')
})

$(document).on("click", function (event) {
  if ($(event.target).closest('.card-of-product .share_button').length === 0) {
    $('.card-of-product .sm-wrapper:visible').toggle('show')
  } 
});