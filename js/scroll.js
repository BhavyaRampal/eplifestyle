$(".btnn").on("click",function(){
  $('.menu').toggleClass("show");
  $('.home').toggleClass("homeH");
  $('.navbar').toggleClass("Nnavbar");
});


document.body.addEventListener('click', function(){
  if( document.getElementsByClassName('menu')[0].classList.contains("show")){
      $('.menu').toggleClass("show");
  } 
  if( document.getElementsByClassName('home')[0].classList.contains("homeH")){
      $('.home').toggleClass("homeH");
  } 
  if( document.getElementsByClassName('navbar')[0].classList.contains("Nnavbar")){
      $('.navbar').toggleClass("Nnavbar");
  }    
}, true);


$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 10) {
      document.getElementById("logo").className = "logoc";
      document.getElementById("navbar").style.height="100px";
      $(".navbar").addClass("active");
  }
  else {
      document.getElementById("logo").className = "logo";
      document.getElementById("navbar").style.height="auto";
      $(".navbar").removeClass("active");
  }
});