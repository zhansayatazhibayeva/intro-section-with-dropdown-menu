'use strict';

const hamburgerIcon=document.getElementById('hamburger-icon');
const header=document.getElementById('header');
const navLinks=document.querySelectorAll('.nav-link');
const body=document.getElementById('body');

hamburgerIcon.addEventListener('click', () => {
    header.classList.toggle('active');
    // document.body.style.backgroundColor='grey';
    body.classList.toggle('bg-grey');
});

navLinks.forEach(function(nav){
    nav.addEventListener('click',function(){
        console.log(this);
        this.classList.toggle("open");
    
        // if(nav.classList.contains("open")){
        //     navLinks.forEach(function(nav){
        //         nav.classList.remove("open");
        //     })
        // nav.classList.toggle("open");
        // }
    });
});