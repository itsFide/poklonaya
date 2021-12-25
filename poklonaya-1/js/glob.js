window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    function eventFire(el, etype){
        if (el.fireEvent) {
          el.fireEvent('on' + etype);
        } else {
          var evObj = document.createEvent('Events');
          evObj.initEvent(etype, true, false);
          el.dispatchEvent(evObj);
        }
      }
    

    const socialHiddenMin = () => {
        
        const btnSoc = document.querySelectorAll('.share');
        const social = document.querySelectorAll('.social_min');
        const close = document.querySelectorAll('.cross_min');
        
        btnSoc.forEach((item, i) => {
            item.addEventListener('click', () => {
                if(social[i].style.display == 'block'){
                    social[i].style.display = 'none';
                    document.body.style.overflow = "";
                } else {
                    social[i].style.display = 'block';
                    document.body.style.overflow = "hidden";
                }
            })
        })
        close.forEach((item, i) => {
            item.addEventListener('click', () => {
                social[i].style.display = "none";
                document.body.style.overflow = "";
            });
        })   
            
    };

    const pageHidden = () => {
        const pageBtn = document.querySelectorAll('.about');
        const pageUp = document.getElementById('up');
        const pageDown = document.getElementById('down');
        const pageUpWr = document.querySelector('.mainwrapper');
        const pageDownWr = document.querySelector('.maindetailswrapper');

        

        pageBtn.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if(i == 0){
                    pageUp.classList.remove('animate__backInDown');
                    pageDown.classList.add('animate__fadeInUp');
                    /* pageUp.classList.remove('animate__backInDown');
                    pageDown.classList.remove('animate__backOutLeft') */;
                    pageUpWr.style.display = 'none';
                    pageDownWr.style.display = 'block';

                } else if (i == 1){
                    pageUp.classList.add('animate__backInDown');
                    pageDown.classList.remove('animate__fadeInUp');
                    /* pageUp.classList.add('animate__backInDown');
                    pageDown.classList.add('animate__backOutLeft'); */
                    pageDownWr.style.display = 'none';
                    pageUpWr.style.display = 'block';


                }
            })
        })
    }

    const pageScroll = () => {
        const sectionUp = document.getElementById('up');
        const sectionDown = document.getElementById('down');

        const pageUpWr = document.querySelector('.mainwrapper');
        const pageDownWr = document.querySelector('.maindetailswrapper');
        const pageDownShare = document.querySelector('.share');
        const mainDetails = document.querySelector('.maindetail');
        
        const mainContentHeader = document.querySelector('.main_content_header');
        const mainContentDescr = document.querySelector('.main_content-descr');

        const mainDetailsContentHeader = document.querySelector('.maindetails_content_descr');
        const mainDetailsContentImg = document.querySelector('.maindetails_content_img');
        


        sectionUp.addEventListener('wheel', (e) => {
            e.preventDefault()
            
            if(e.deltaY < 0){
                console.log('4 up ' + e.deltaY);
                //pageDownShare.classList.remove('animate__zoomIn');
                pageUpWr.style.display = 'block';
                pageDownWr.style.display = 'none';

                /* if(pageUpWr.style.display == 'block'){
                    pageUpWr.style.display = 'none';
                    pageDownWr.style.display = 'block';
                } else {
                    pageUpWr.style.display = 'block';
                    pageDownWr.style.display = 'none';
                } */
                //mainDetails.classList.remove('animate__fadeInLeft');
                
                mainContentHeader.classList.add('animate__fadeInLeft');
                mainContentDescr.classList.add('animate__fadeInRight');
                mainDetailsContentHeader.classList.remove('animate__fadeInLeft');
                //mainDetailsContentImg.classList.remove('animate__fadeInRight');

            } else {
                console.log('3 up ' + e.deltaY);
                //mainDetails.classList.add('animate__fadeInLeft');

                //pageDownShare.classList.add('animate__zoomIn');
                pageUpWr.style.display = 'none';
                pageDownWr.style.display = 'block';

                /* if(pageUpWr.style.display == 'block'){
                    pageUpWr.style.display = 'none';
                    pageDownWr.style.display = 'block';
                } else {
                    pageUpWr.style.display = 'block';
                    pageDownWr.style.display = 'none';
                } */

                mainContentHeader.classList.remove('animate__fadeInLeft');
                mainContentDescr.classList.remove('animate__fadeInRight');
                mainDetailsContentHeader.classList.add('animate__fadeInLeft');
                //mainDetailsContentImg.classList.add('animate__fadeInRight');
            }

        })
        sectionDown.addEventListener('wheel', (e) => {
           e.preventDefault()
            
           if(e.deltaY > 0){
               console.log('1 down' + e.deltaY);
               pageUpWr.style.display = 'none';
               //pageDownWr.style.display = 'block';

                /* if(pageUpWr.style.display == 'block'){
                    pageUpWr.style.display = 'none';
                    pageDownWr.style.display = 'block';
                } else {
                    pageUpWr.style.display = 'block';
                    pageDownWr.style.display = 'none';
                } */
                //mainDetails.classList.add('animate__fadeInLeft');
               //pageDownShare.classList.add('animate__zoomIn');

               mainContentHeader.classList.remove('animate__fadeInLeft');
                mainContentDescr.classList.remove('animate__zoomIn');
                mainDetailsContentHeader.classList.add('animate__fadeInLeft');
                mainDetailsContentImg.classList.add('animate__fadeInRight');
                
           } else {
            console.log('2 down' + e.deltaY);
               //pageDownShare.classList.remove('animate__zoomIn');
               pageUpWr.style.display = 'block';
               //pageDown.style.display = 'none';

               /* if(pageUpWr.style.display == 'block'){
                    pageUpWr.style.display = 'none';
                    pageDownWr.style.display = 'block';
                } else {
                    pageUpWr.style.display = 'block';
                    pageDownWr.style.display = 'none';
                } */
                //mainDetails.classList.remove('animate__fadeInLeft');
               
                mainContentHeader.classList.add('animate__fadeInLeft');
                mainContentDescr.classList.add('animate__zoomIn');
                mainDetailsContentHeader.classList.remove('animate__fadeInLeft');
                mainDetailsContentImg.classList.remove('animate__fadeInRight');
           }

        })      
    }

    const pageHiddenAll = () => {
        const pageBtn = document.querySelectorAll('.about');
        const pageUpWr = document.querySelector('.mainwrapper');
        const pageDownWr = document.querySelector('.maindetailswrapper');
        const pageDownShare = document.querySelector('.share');
        
        const mainContentHeader = document.querySelector('.main_content_header');
        const mainContentDescr = document.querySelector('.main_content-descr');

        const mainDetailsContentHeader = document.querySelector('.maindetails_content_descr');
        const mainDetailsContentImg = document.querySelector('.maindetails_content_img');

        pageBtn.forEach((item, i) => {
            item.addEventListener('click', () => {
                if(i == 0){

                    mainContentHeader.classList.remove('animate__backInLeft');
                    mainContentDescr.classList.remove('animate__backInRight');
                    mainDetailsContentHeader.classList.add('animate__backInLeft');
                    mainDetailsContentImg.classList.add('animate__backInRight');
                    
                    pageDownShare.classList.add('animate__zoomIn');
                    pageUpWr.style.display = 'none';
                    pageDownWr.style.display = 'block';
                } else if (i == 1){
                    mainContentHeader.classList.add('animate__backInLeft');
                    mainContentDescr.classList.add('animate__backInRight');
                    mainDetailsContentHeader.classList.remove('animate__backInLeft');
                    mainDetailsContentImg.classList.remove('animate__backInRight');


                    /* pageUp.classList.remove('animate__backOutLeft');
                    pageDown.classList.remove('animate__backInUp');
                    pageUp.classList.add('animate__backInDown');
                    pageDown.classList.add('animate__backOutLeft'); */
                    pageDownWr.style.display = 'none';
                    pageUpWr.style.display = 'block';
                }
            })
        })
    }

    const pageScrollTwo = () => {
        
            const sectionUp = document.getElementById('up');
            const sectionDown = document.getElementById('down');
    
            const pageUpWr = document.querySelector('.mainwrapper');
            const pageDownWr = document.querySelector('.maindetailswrapper');
            const pageDownShare = document.querySelector('.share');
            const mainDetails = document.querySelector('.maindetail');
            
            const mainContentHeader = document.querySelector('.main_content_header');
            const mainContentDescr = document.querySelector('.main_content-descr');
    
            const mainDetailsContentHeader = document.querySelector('.maindetails_content_descr');
            const mainDetailsContentImg = document.querySelector('.maindetails_content_img');
            
    
    
            document.addEventListener('wheel', (e) => {
                e.preventDefault()
                
                if(e.deltaY < 0){
                    console.log('4 up ' + e.deltaY);
                    //pageDownWr.classList.remove('animate__zoomIn');
                    //pageDownWr.classList.add('animate__zoomIn');

                    pageUpWr.style.display = 'block';
                    pageDownWr.style.display = 'none';
                    
                    mainContentHeader.classList.add('animate__fadeInLeft');
                    mainContentDescr.classList.add('animate__zoomIn');
                    mainDetailsContentHeader.classList.remove('animate__fadeInLeft');
                    mainDetailsContentImg.classList.remove('animate__fadeInRight');
    
                }  //mainDetailsContentImg.classList.add('animate__fadeInRight');
                if(e.deltaY > 0){
                    console.log('1 down' + e.deltaY);
                    //pageDownWr.classList.add('animate__zoomIn');
                    //pageDownWr.classList.remove('animate__zoomIn');
                    pageUpWr.style.display = 'none';
                    pageDownWr.style.display = 'block';
     
                    mainContentHeader.classList.remove('animate__fadeInLeft');
                    mainContentDescr.classList.remove('animate__zoomIn');
                     mainDetailsContentHeader.classList.add('animate__fadeInLeft');
                     mainDetailsContentImg.classList.remove('animate__fadeInRight');
                     
                }
    
            }) 
    }
    

    pageScrollTwo();
    //pageHiddenAll();
    socialHiddenMin();
    pageHidden();
    //pageScroll();

});