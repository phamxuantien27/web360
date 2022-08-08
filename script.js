let slideIndex = 1;
showSlides(slideIndex);


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
let slideIndex1 = 1;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  if (slideIndex1 > slides.length) {slideIndex1 = 1}
  slides[slideIndex1-1].style.display = "block";
  slideIndex1++
  console.log(slideIndex1)
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}



var tab2 = document.querySelector('.tab_search')
var element = document.querySelector(".search2");
tab2.addEventListener('click',()=> {   
    element.classList.add("active2");
   
    
  })

var close =  document.querySelector('.close_search')
close.addEventListener('click', () => {

    element.classList.remove("active2");
    
    
})

var tab3 = document.querySelector('.tab_cart')
var element2 = document.querySelector(".cart");
tab3.addEventListener('click',()=> {   
    element2.classList.add("active2");
    
  })
  var close =  document.querySelector('.close_cart')
  close.addEventListener('click', () => {
  
      element2.classList.remove("active2");
      
      
  })

//Xử lý scroll nav

  var nav = document.querySelector('.nav');
  window.addEventListener('scroll',()=>{
    var x = window.pageYOffset;
    if(x>200)
    {
      var logo = document.querySelector('.nav_logo');
      logo.classList.remove('hidden');
      nav.classList.add('scroll');
      var icon = document.querySelector('.nav_icon');
      icon.classList.remove('hidden');
    }
    else{
      var logo = document.querySelector('.nav_logo');
      logo.classList.add('hidden');
      nav.classList.remove('scroll');
      var icon = document.querySelector('.nav_icon');
      icon.classList.add('hidden');
    }
  })
//slider sản phẩm mới
var item = document.querySelectorAll('.new_item');
var next = document.querySelector('.btn_next');
var i=0
next.addEventListener('click', () => {

  if(i>3) {i = 1}
  item[i].classList.add('hidden');
  item[i+4].classList.remove('hidden');
  item[i+4].classList.add('active3');
  i=i+1
  
});
//moblie nav show
var tab3 = document.querySelector('.mobile_nav_icon')
var element3 = document.querySelector(".mobile_nav");
tab3.addEventListener('click',()=> {   
    element3.classList.add("active2");
   
    
  })

var close3 =  document.querySelector('.close_search1')
close3.addEventListener('click', () => {

   element3.classList.remove("active2")
    
})