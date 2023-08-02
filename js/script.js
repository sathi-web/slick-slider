$(function(){
    //top_to_bottom
    $(".top_to_bottom").click(function(){
        $("body,html").animate({scrollTop:0},1000)
    })
    //scroll
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

  //fixd-navbar
  $(window).scroll(function(){
    let scrolling = $(this).scrollTop();
    if(scrolling > 600){
        $(".nav").addClass("fixd_nav");
    }else{
        $(".nav").removeClass("fixd_nav");
    }
    
     
  })
})
  

