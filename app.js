const arrow = document.querySelector('.arrow');



window.addEventListener('scroll',function(){
    
    
    if(window.scrollY < 100){
        arrow.classList.add('znika')
        
    }else{
        arrow.classList.remove('znika')
    }
        
})

arrow.addEventListener('click',function(){
    window.scrollTo(0,0)
})



