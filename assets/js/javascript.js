$(document).ready(function () {
    // SLIDE - HOME
    $('#gallery').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    });

    $('.new-p').slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });


    $('.sub-button').click(function () {
        var newEmail = $('#subscribe-email').val();
        if (newEmail == '') {
            alert('Please Type Your Email.');
        } else {
            $('#myModal').fadeIn(200); 
            $('#email').text(newEmail);
        }
    })

    $('.close-btn').click(function () {
        $('#myModal').fadeOut(200);
    });
    
    $('.btn-coupon').click(function () {
        $('#couponModal').fadeIn(200);
    });
    $('.close-btn').click(function () {
        $('#couponModal').fadeOut(200);
    });

    // GALLERY
    $(window).scroll(function () {
        $('.fade-in').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},1000);
            }
        });
    });
})

// BACK TO TOP
var btt = document.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPosition, docHeight, 
    isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
    isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;

    docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

    if(docHeight != 'undefined') {
        offset = docHeight / 4;
    };

    window.addEventListener('scroll', function() {
        scrollPos = body.scrollTop || docElem.scrollTop;

        btt.className = (scrollPos > offset) ? 'visible': '';
    });

    btt.addEventListener('click', function(event){
        if(isFirefox || isChrome) {
            docElem.scrollTop = 0;
        } else {
            body.scrollTop = 0;
        }
    });

// MODAL EMAIL



// MODAL - FOOTER
// var modal = document.getElementsByClassName('modal');
// var subBtn = document.getElementsByClassName('sub-button')[0];
// var closeBtn = document.getElementsByClassName('modal-btn')[0]; 

// subBtn.onclick = function () {
//     modal.style.display = 'block';
// }

// closeBtn.onclick = function () {
//     modal.style.display = 'none';
// }

// window.onclick = function (event) {
    
//     if(event.target == modal) {
//         modal.style.display = 'none';
//     }
// }



// PRODUCT - HOME
function openPic(picName, elmnt) {
    var i, tabcontent, shoplinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    shoplinks = document.getElementsByClassName('tablink');
    for(i = 0; i < shoplinks.length; i++) {
        shoplinks[i].style.backgroundColor = "";
    }

    document.getElementById(picName).style.display="block";

}
document.getElementById('default').style.display = "block";
