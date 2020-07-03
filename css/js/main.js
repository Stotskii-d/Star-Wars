$(document).ready(function(){
	const mMenuBtn = $(".m-menu-button");
	const mMenu= $(".m-menu");
	const tab= $(".tab");

	mMenuBtn.on("click",function(){
		mMenu.toggleClass("activ");
	});
	tab.on("click",function(){
		tab.removeClass("activ");
      $(this).toggleClass("activ");
   });
   $(".owl-carousel").owlCarousel({
      margin:10,
      nav:true,
      navClass:["slider-nav-left","slider-nav-right"],	
      responsive:{
         0: {
            items:1
         },
         630: {
             items:2
         },
         900: {
             items:3
         },
         1200: {
         	items:4
        }
      }
   });
});