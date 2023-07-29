window.addEventListener('scroll',col1);

function col1(){
    var col1=document.querySelectorAll('.col1');

    for (var i=0; i<col1.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = col1[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop<windowheight - revealpoint){
            col1[i].classList.add('active');
        }
        else{
            col1[i].classList.remove('active');
        }
    }

}