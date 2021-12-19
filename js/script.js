
setTimeout(function(){
    $(".preloder").slideUp();

},2000)



$(".item-slider").slick({
    dots:true,
    arrows:false,
    slidesToShow:3,


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
