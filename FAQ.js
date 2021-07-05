window.addEventListener('load', function(){
    let faq = document.querySelector('.faq-quest');

    faq.addEventListener('click', function(e){
        e.preventDefault();
        let link = e.target;
        if(link.classList.contains('faq-item__btn')){
            link.classList.toggle('btn-wrapper__active');
            toggleItem(link);
        }
    })
})

function toggleItem(link){
    let answer = link.nextElementSibling;
    if(answer.classList.contains('answer-open')){
        let animate = answer.animate([
            {height: answer.clientHeight + 'px'},
            {height: 0}
        ], {duration: 500});
        animate.addEventListener('finish', function(){
            answer.classList.remove('answer-open');
        })
    }else{
        answer.classList.add('answer-open');
        answer.animate([
         {height: 0},
         {height: answer.clientHeight + 'px'}
        ], {duration: 500});
    }
} 