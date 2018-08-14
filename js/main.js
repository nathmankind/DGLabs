var test = $('.btn-1');
test.click(function(){ alert('Hey')});

//let tester = $('.about-us button');
//tester.hide();

const firstname = $('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const message = document.querySelector('#comment');
const f_nameHelp = document.querySelector('#f_namehelp');
const l_nameHelp = document.querySelector('#l_namehelp');
var f_name = firstname.value;
var l_name = lastname.value;
var email_value = email.value;
var msg = message.value;

let submitButton = document.querySelector('.modal-footer button');




// $(document).ready(function() {

//     var number_percentage = $(".number-percentage");
//     function animateProgressBar(){
//         number_percentage.each(function() {
//         $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration"), 10));
//                 var value = $(this).attr("data-value");
//                 var duration = $(this).attr("data-animation-duration");
//         $(this).closest('.xs-skill-bar').find('.xs-skill-track').animate({
//             width: value + '%'
//             }, 4500);
//         });
//     }

    
//});

    var btn = document.querySelector('.cnt-btn');
    btn.addEventListener('click', function(){alert('Test works')});


    var prg1 = document.querySelector('.xs-skill-track1');
    var percent1 = document.querySelector('.number-percentage1');
    let width1 = 1;
    var bar_width1 = prg1.style.width;
    var prg2 = document.querySelector('.xs-skill-track2');
    var percent2 = document.querySelector('.number-percentage2');
    var width2 = 1;
    var bar_width2 = prg2.style.width;
    var id = setInterval(frame_2, 50);
    var id = setInterval(frame, 50);
    var prg3 = document.querySelector('.xs-skill-track3');
    var percent3 = document.querySelector('.number-percentage3');
    var width3 = 1;
    var bar_width3 = prg3.style.width;
    var id = setInterval(frame_3, 50);
    bar_width1 = bar_width1.replace('%', '');
    

    function frame(){
        if (width1 >= bar_width1) {
            clearInterval(id);
        } else {
            width1 +=1;
            percent1.textContent = width1;
            prg1.style.width = width1 + '%';
        }
    }

    bar_width2 = bar_width2.replace('%', '');

    function frame_2(){
        if (width2 >= bar_width2) {
            clearInterval(id);
        } else {
            width2 +=1;
            percent2.textContent = width2;
            prg2.style.width = width2 + '%';
        }
    }

    bar_width3 = bar_width3.replace('%', '');

    function frame_3(){
        if (width3 >= bar_width3) {
            clearInterval(id);
        } else {
            width3 +=1;
            percent3.textContent = width3;
            prg3.style.width = width3 + '%';
        }
    }
    submitButton.addEventListener('click', contactForm);
    function contactForm(){
        var name = document.querySelector('#firstname');
        if(f_name === '' || f_name == null ){
            f_nameHelp.style.display = 'block';
            return false;
        }else{
            f_nameHelp.style.display = 'none';
            console.log(f_name);
        }
        
        
    }
    
    // var prg = document.querySelector('.xs-skill-track');
    // var percent = document.querySelector('.number-percentage');
    // var counter = 5;
    // var count_level = prg.style.width;
    // var progress = 25;
    // var id = setInterval(loader, 50);

    // function loader(){
    //     if (progress == 500 && counter == 100) {
    //         clearInterval(id);          
    //     } else {
    //         progress +=5;
    //         counter += 1;
    //         prg.style.width = progress + '%';
    //         percent.textContent = counter;
    //     }
    // }
