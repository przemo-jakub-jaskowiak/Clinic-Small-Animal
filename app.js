const arrow = document.querySelector('.arrow');



window.addEventListener('scroll',function(){
    
    
    if(window.scrollY < 100){
        arrow.classList.add('znika')
        
    }else{
        arrow.classList.remove('znika')
    }
        
});

arrow.addEventListener('click',function(){
    window.scrollTo(0,0)
});

const offer = document.querySelector('.offer')
const offer1 = document.querySelector('.offer-1')
const team = document.querySelector('.team')
const team1 = document.querySelector('.team-1')
const btnC = document.querySelector('button.close')
const btnC2 = document.querySelector('button.close-1')
team.addEventListener('click',function(){
    team1.classList.add('active')
    team1.classList.remove('missing')
    document.body.add('.blur')
})

offer.addEventListener('click',function(){
    offer1.classList.add('active')
    offer1.classList.remove('missing')
    document.body.add('.blur')
})

btnC.addEventListener('click',function(){
    offer1.classList.remove('active')
    offer1.classList.add('missing')
})

btnC2.addEventListener('click',function(){
    team1.classList.remove('active')
    team1.classList.add('missing')
})