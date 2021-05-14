let slideIndex = 1;
let colorCode = ['ffffff', 'cdfdff', '99fcce','98fd99', '98fd67', '99fd00', 'ccff00', 'feff01', 'fbcb00','f99900','f76500', 'f73600','D5102D'];
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";//block
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  if(document.getElementsByClassName('color-code')[n-1]){
    console.log('hello');
    document.getElementsByClassName('color-code')[n-1].style.background = `#${colorCode[n-1]}`;
  }
}