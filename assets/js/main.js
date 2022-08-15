// Menü
$(".toggleMenu").on('click', function () {
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

$('.card-of-product .share_button').on('click', function () {
  $('.card-of-product .sm-wrapper:visible').toggle('show')
  $(this).parents('.card-of-product').find('.sm-wrapper:hidden').toggle('show')
})

$(document).on("click", function (event) {
  if ($(event.target).closest('.card-of-product .share_button').length === 0) {
    $('.card-of-product .sm-wrapper:visible').toggle('show')
  }
})

// yeşil kartların paylaş butonu için

$('.card-of-product1 .share_button').on('click', function () {
  $('.card-of-product1 .sm-wrapper:visible').toggle('show')
  $(this).parents('.card-of-product1').find('.sm-wrapper:hidden').toggle('show')
})

$(document).on("click", function (event) {
  if ($(event.target).closest('.card-of-product1 .share_button').length === 0) {
    $('.card-of-product1 .sm-wrapper:visible').toggle('show')
  }
})

// ürün detay sayfası paylaş butonu için

$('.share_and_favorite_button .share_button').on('click', function () {
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
coffeeCupContainers.each(function () {
  const selectedCups = $(this).attr('data-selected')
  if (selectedCups === undefined) return false

  const cups = $(this).children()

  cups.each(function (idx) {
    if (idx === +selectedCups) return false
    const cup = $(this)
    cup.css('opacity', 1)
  })
})

$(document).on('click', '.coffee_cup img', function () {
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
$('.tabs a').click(function (e) {
  e.preventDefault();
  var $this = $(this),
    tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
    others = $this.closest('li').siblings().children('a'),
    target = $this.attr('href');
  others.removeClass('active');
  $this.addClass('active');
  $(tabgroup).children('div').hide();
  $(target).show();

})

// ------------- üye olurken cinsiyet seçimi butonları için class ismi ekleme ve kaldırma ------------

$('#female').click(function () {
  if ($(this).addClass("active")) {
    $('#man').removeClass('active');
  }
});
$('#man').click(function () {
  if ($(this).addClass("active")) {
    $('#female').removeClass('active');
  }
});

// ----------- ürünleri satın alırken adet kaç adet seçimi için ürün sayaç ---------------

$('.button-minus').click(function () {
  const el = $(this)
  const input = el.parents('.prosuct_count').find('input:text')
  const minusBtn = el.parents('.prosuct_count').find('.button-minus')
  const plusBtn = el.parents('.prosuct_count').find('.button-plus')

  const num = parseInt(input.val());
  if (num > 1) {
    input.val(num - 1);
  }
  if (num == 2) {
    minusBtn.prop('disabled', true);
    jQuery(minusBtn).css('opacity', '0.4');
  }
  if (num == 10) {
    plusBtn.prop('disabled', false);
    jQuery(plusBtn).css('opacity', '1');
  }
});

$('.button-plus').click(function () {
  const el = $(this)
  const input = el.parents('.prosuct_count').find('input:text')
  const minusBtn = el.parents('.prosuct_count').find('.button-minus')
  const plusBtn = el.parents('.prosuct_count').find('.button-plus')

  const num = parseInt(input.val());
  console.log(num);
  if (num < 10) {
    input.val(num + 1);
  }
  if (num > 0) {
    minusBtn.prop('disabled', false);
    jQuery(minusBtn).css('opacity', '1');
  }
  if (num == 9) {
    plusBtn.prop('disabled', true);
    jQuery(plusBtn).css('opacity', '0.4');
  }
});

// --------- Ürün detay sayfası gramaj seçimi için class ismi ekleme ve silme ----------

$('.250gr').click(function () {
  if ($(this).addClass("active")) {
    $('.350gr, .500gr').removeClass('active');
  }
});
$('.350gr').click(function () {
  if ($(this).addClass("active")) {
    $('.250gr, .500gr').removeClass('active');
  }
});
$('.500gr').click(function () {
  if ($(this).addClass("active")) {
    $('.250gr, .350gr').removeClass('active');
  }
});


// -------------- sayfanın en başına dönmek için buton ---------------

// düğmeyi seç
var mybutton = document.getElementById("myBtn");

// Sayfanın üst kısmından 20 piksel aşağı kaydırdığında düğmeyi göster
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// düğmeye tıkladığında sayfanın en üstüne gidin
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// sepetten ürün silme tuşu (removebutton clası eklenen butonlar dummy classlı parentini siliyor)

$(".removebutton").on("click", function () {

  $(this).parents('.dummy').fadeOut(500, function () {
    // silerken fadeout effecti için üstteki parents(dummy) yazıldığında effecti dummy class lı dive veriyor
    $(this).parents('.dummy').remove();
  });

});


// seppeteki ürün sayısını üste yazdırma

var num = $(".product-in-cart .dummy").length;
localStorage.setItem("cartnum", num);
var cartnumm = localStorage.getItem("cartnum");
// console.log(cartnumm);
$(".number_of_product_cart").text(" " + cartnumm + " ");



// ____________________ copy to clipboard özelliği için indirim kuponlarının kodlarını kopyalamak için _____________________


$(".copy").on('click', function () {
  var text = $(this).parents(".discount_coupon1").find(".coupon_code").text()
  console.log(text)
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();

});

// ______________________________ özel select box için ______________________________

$(".default_option").click(function () {
  $(this).parent().toggleClass("active");
})

$(".select_ul li").click(function () {
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
})