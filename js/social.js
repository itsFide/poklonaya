window.addEventListener('DOMContentLoaded', () => {
    'use strict'
      const socialHidden = () => {
          
          const btn = document.querySelector('.form_social');
          const block = document.querySelector('.social_block');
          const social = document.querySelector('.social');
          const close = document.querySelector('.cross');
          
              btn.addEventListener('click', () => {
                  if(social.style.display == 'block'){
                      social.style.display = 'none';
                      document.body.style.overflow = "";
                  } else {
                      social.style.display = 'block';
                      document.body.style.overflow = "hidden";
                  }
              });
              
              close.addEventListener('click', () => {
                  social.style.display = "none";
                  document.body.style.overflow = "";
              });
          
          social.addEventListener('click', () => {
                social.style.display = "none";
                document.body.style.overflow = "";
            });
      };

    socialHidden();
    });