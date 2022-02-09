
setTimeout(function(){
    $(".preloder").slideUp();

},2000)



$(".item-slider").slick({
    dots:true,
    arrows:false,
    slidesToShow:3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,

          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]


})



$(".event").slick({
    arrows:false,
    dots:true,
    slidesToShow:1,

})

$(".revie-slider").slick({
    slidesToShow:1,
    arrows:false,
    dots:true,
})
$(window).scroll(function(){
    console.log($(window).scrollTop())

    if($(window).scrollTop() > 300){
        $(".had").addClass("heds")
    }else{
        $(".had").removeClass("heds")
    }
})
 
$(window).scroll(function(){
    console.log($(window).scrollTop())

    if($(window).scrollTop() > 300){
        $(".menu").addClass("nabs")
    }else{
        $(".menu").removeClass("nabs")
    }
})

$(".white").click(function(){
    $(".chage").attr("href","css/style-white.css")
})
$(".yellow").click(function(){
    $(".chage").attr("href","css/style-yellow.css")
})

$(".black").click(function(){
    $(".chage").attr("href","css/style.css")
})
