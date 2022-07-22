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
})

// yeşil kartların paylaş butonu için

$('.card-of-product1 .share_button').on('click', function() {
  $('.card-of-product1 .sm-wrapper:visible').toggle('show')
  $(this).parents('.card-of-product1').find('.sm-wrapper:hidden').toggle('show')
})

$(document).on("click", function (event) {
  if ($(event.target).closest('.card-of-product1 .share_button').length === 0) {
    $('.card-of-product1 .sm-wrapper:visible').toggle('show')
  } 
})

// ürün detay sayfası paylaş butonu için

$('.share_and_favorite_button .share_button').on('click', function() {
  $('.share_and_favorite_button .sm-wrapper:visible').toggle('show')
  $(this).parents('.share_and_favorite_button').find('.sm-wrapper:hidden').toggle('show')
})

$(document).on("click", function (event) {
  if ($(event.target).closest('.share_and_favorite_button .share_button').length === 0) {
    $('.share_and_favorite_button .sm-wrapper:visible').toggle('show')
  } 
})


// Urun puanlama
const coffeeCupContainers = $('.coffee_cup')
coffeeCupContainers.each(function() {
  const selectedCups = $(this).attr('data-selected')
  if (selectedCups === undefined) return false
  
  const cups = $(this).children()
  
  cups.each(function(idx) {
    if (idx === +selectedCups) return false
    const cup = $(this)
    cup.css('opacity', 1)
  })
})

$(document).on('click', '.coffee_cup img', function() {
  const currImage = $(this)
  const imagesContainer = currImage.parents('.coffee_cup')
  const isCurrImageSelected = +currImage.css('opacity') === 1

  currImage.css('opacity', isCurrImageSelected ? 0.3 : 1)
  currImage.prevUntil().css('opacity', 1)
  currImage.nextUntil().css('opacity', 0.3)

  const totalSelected = currImage.prevUntil().length + (isCurrImageSelected ? 0 : 1)
  imagesContainer.attr('data-selected', totalSelected)
})

// login sayfasındakı tab yapısı için

$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
})
    
