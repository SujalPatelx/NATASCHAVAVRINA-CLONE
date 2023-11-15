let f_con = document.querySelector('.f_container');
let l_con = document.querySelector('.l-continer');
let c_con = document.querySelector('.c-continer-c');
let f_btn = document.querySelector('.f-content-btn');
let l_btn = document.querySelector('.l-content-btn');
let l_btnP = document.querySelector('.l-content-btn-p');

f_con.addEventListener("mouseenter", function () {
    c_con.style.height = '55vh';
    f_btn.style.backgroundColor = '#333';
    f_btn.style.color = '#fff'
    document.querySelector('.img_one').style.width = '22vw'
    document.querySelector('.img_one').style.height = '22vh'
    document.querySelector('.img_one').style.opacity = '1'
    document.querySelector('.img_one').style.webkitFilter = 'blur(0)'
    document.querySelector('.img_two').style.width = '18vw'
    document.querySelector('.img_two').style.height = '18vh'
    document.querySelector('.img_two').style.opacity = '1'
    document.querySelector('.img_two').style.webkitFilter = 'blur(12px)'
    document.querySelector('.img_three').style.width = '9vw'
    document.querySelector('.img_three').style.height = '9vh'
    document.querySelector('.img_three').style.opacity = '1'
    document.querySelector('.img_three').style.webkitFilter = 'blur(16px)'
    document.querySelector('.img_four').style.width = '5vw'
    document.querySelector('.img_four').style.height = '5vh'
    document.querySelector('.img_four').style.opacity = '1'
    document.querySelector('.img_four').style.webkitFilter = 'blur(16px)'
});
f_con.addEventListener("mouseleave", function () {
    c_con.style.height = '0vh'
    f_btn.style.backgroundColor = 'transparent';
    f_btn.style.color = '#333'
    document.querySelector('.img_one').style.width = '15vw'
    document.querySelector('.img_one').style.height = '15vh'
    document.querySelector('.img_one').style.opacity = '0'
    document.querySelector('.img_one').style.webkitFilter = 'blur(10px)'
    document.querySelector('.img_two').style.width = '12vw'
    document.querySelector('.img_two').style.height = '12vh'
    document.querySelector('.img_two').style.opacity = '0'
    document.querySelector('.img_two').style.webkitFilter = 'blur(10px)'
    document.querySelector('.img_three').style.width = '8vw'
    document.querySelector('.img_three').style.height = '8vh'
    document.querySelector('.img_three').style.opacity = '0'
    document.querySelector('.img_three').style.webkitFilter = 'blur(10px)'
    document.querySelector('.img_four').style.width = '3vw'
    document.querySelector('.img_four').style.height = '3vh'
    document.querySelector('.img_four').style.opacity = '0'
    document.querySelector('.img_four').style.webkitFilter = 'blur(10px)'
});

l_con.addEventListener("mouseenter", function () {
    c_con.style.height = '55vh';
    l_btn.style.backgroundColor = '#333';
    l_btn.style.color = '#fff'
    l_btn.style.width = '16vw'
    l_btnP.innerText = 'DIRECTOR OF PHOTOGRAPH WORK'
    document.querySelector('.img_five').style.width = '22vw'
    document.querySelector('.img_five').style.height = '22vh'
    document.querySelector('.img_five').style.opacity = '1'
    document.querySelector('.img_five').style.webkitFilter = 'blur(0)'
    document.querySelector('.img_six').style.width = '18vw'
    document.querySelector('.img_six').style.height = '18vh'
    document.querySelector('.img_six').style.opacity = '1'
    document.querySelector('.img_six').style.webkitFilter = 'blur(12px)'
    document.querySelector('.img_seven').style.width = '9vw'
    document.querySelector('.img_seven').style.height = '9vh'
    document.querySelector('.img_seven').style.opacity = '1'
    document.querySelector('.img_seven').style.webkitFilter = 'blur(16px)'
    document.querySelector('.img_eight').style.width = '5vw'
    document.querySelector('.img_eight').style.height = '5vh'
    document.querySelector('.img_eight').style.opacity = '1'
    document.querySelector('.img_eight').style.webkitFilter = 'blur(16px)'
});
l_con.addEventListener("mouseleave", function () {
    c_con.style.height = '0vh'
    l_btn.style.backgroundColor = 'transparent';
    l_btn.style.color = '#333'
    l_btn.style.width = '5vw'
    l_btnP.innerText = 'DOP WORK'
    document.querySelector('.img_five').style.width = '15vw'
    document.querySelector('.img_five').style.height = '15vh'
    document.querySelector('.img_five').style.opacity = '0'
    document.querySelector('.img_five').style.webkitFilter = 'blur(10px)'
    document.querySelector('.img_six').style.width = '12vw'
    document.querySelector('.img_six').style.height = '12vh'
    document.querySelector('.img_six').style.opacity = '0'
    document.querySelector('.img_six').style.webkitFilter = 'blur(10px)'
    document.querySelector('.img_seven').style.width = '8vw'
    document.querySelector('.img_seven').style.height = '8vh'
    document.querySelector('.img_seven').style.opacity = '0'
    document.querySelector('.img_seven').style.webkitFilter = 'blur(10px)'
    document.querySelector('.img_eight').style.width = '3vw'
    document.querySelector('.img_eight').style.height = '3vh'
    document.querySelector('.img_eight').style.opacity = '0'
    document.querySelector('.img_eight').style.webkitFilter = 'blur(10px)'
});