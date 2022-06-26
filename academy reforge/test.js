var slide_num = 0 ;
var quote_slide_num = 0 ;
autoplay();

function nextSlide(n){
    showSlide(slide_num += n) ;
}

function nextQuoteSlide(n){
    showQuoteSlide(quote_slide_num += n) ;
}

function showSlide(n){
    slide_num = n ;
    var x = document.getElementsByClassName("slide-img");
    var dots = document.getElementsByClassName("dot");

    if(n > x.length){
        slide_num = 1 ;
    }else if(n < 1){
        slide_num = x.length ;
    }

    for (var i = 0; i < x.length; i++){
        x[i].style.display = "none" ;  
    }

    for(var i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active-dot", "") ;
    }

    x[slide_num-1].style.display = "block" ;
    dots[slide_num-1].className += " active-dot" ;
}

function showQuoteSlide(n){
    quote_slide_num = n ;
    var x = document.getElementsByClassName("quotes-box");
    var dots = document.getElementsByClassName("quotes-dot");

    if(n > x.length){
        quote_slide_num = 1 ;
    }else if(n < 1){
        quote_slide_num = x.length ;
    }

    for (var i = 0; i < x.length; i++){
        x[i].style.display = "none" ;  
    }

    for(var i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active-quotes-dot", "") ;
    }

    x[quote_slide_num-1].style.display = "flex" ;
    dots[quote_slide_num-1].className += " active-quotes-dot" ;
}

function autoplay(){
    nextSlide(1) ;
    nextQuoteSlide(1) ;
    setTimeout(autoplay, 500000) ; //remember to change back the time
}