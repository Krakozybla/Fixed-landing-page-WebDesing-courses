const callModalWindow = document.querySelector('.menu__sign');
const modalWindow = document.querySelector('.modal');
const btnCloseMW = document.querySelector('.modal-form__close');
const form = document.querySelector('.modal-form');
let inputs = document.querySelectorAll('.modal-form__input');
const btnCallSubsrWind = document.querySelectorAll('.btn_call-modal');
const subscrWind = document.querySelector('.subscribe-modal');

btnCallSubsrWind.forEach(item =>{
    item.addEventListener('click', function(e){
        if(e.target.classList.contains('btn_call-modal')){
            let link = e.target;
           createSubscribWind(link);
        }
    })
})

function createSubscribWind(link){
    subscrWind.classList.add('open');
    const closeBtn = document.querySelector('.subscribe-modal__btnclose');
    closeBtn.addEventListener('click', function(){
        subscrWind.classList.remove('open');
    })
    const inputs = document.querySelectorAll('.subscribe-modal__form-input');
    const subscrForm = document.querySelector('.subscribe-modal__form');

    subscrForm.addEventListener('submit', function(e){
        let isErr = false;
        inputs.forEach((elem,idx) =>{
            const valElem = elem.value.trim();
            let pattrn = patterns[elem.dataset.validation];
              if(!pattrn.test(valElem)){
                  elem.classList.add('err');
                  isErr = true;
              }else{
                err.innerHTML = '';
              }
        })
        if(isErr){
            e.preventDefault();
            let err = document.createElement('span');
            err.className = 'not-validated';
            err.innerHTML = 'Correctly writte data!'
            subscrForm.appendChild(err);
        }
    })
}
callModalWindow.addEventListener('click', function(){
    modalWindow.classList.add("modal-window__open");
})
btnCloseMW.addEventListener('click', function(){
    modalWindow.classList.remove("modal-window__open");
})
const patterns = {
    name: /.+/,
    phone: /\d{7,15}/,
    email: /.+@.+\..+/
}
const validationRules = {
    notEmpty: {
        rule: 'name',
        msg: 'Please, write a correct name!'
    },
    phone: {
        rule: 'phone',
        msg: 'Please, writte a correct phone number!'
    },
    email: {
        rule: 'email',
        msg: 'Please, writte a correct email adress'
    }
}
form.addEventListener('submit', function(e){
    let map = false;
    inputs.forEach(item=>{
        let valid = validationRules[item.dataset.validation];
        let Vtype = valid.rule;
        let pattern = patterns[Vtype];
        let val = item.value.trim();
        let message = item.nextElementSibling;
        if(!pattern.test(val)){
            item.classList.add('err');
            message.innerHTML = valid.msg;
            map = true;
        }else{
            modalWindow.classList.remove("modal-window__open");
            message.innerHTML = "";
        }
    })
    if(map){
        e.preventDefault();
    }
})

/*window.addEventListener('load', function(){
    let CallMdWindow = document.querySelector('.menu__sign');
    let ModalWindow = document.querySelector('.modal');
    let btnCloseMdWindow = document.querySelector('.modal-form__close');
    let form = document.querySelector('.modal-form');
    let inputs = document.querySelectorAll('.modal-form__input');
    console.log(inputs);

    btnCloseMdWindow.addEventListener('click', function(){
        ModalWindow.classList.remove('modal-window__open');
    })
    CallMdWindow.addEventListener('click', function(){
        ModalWindow.classList.add('modal-window__open');
    })
    let patterns = {
        name: /.+/,
        phone: /\d{7,15}/,
        email: /.+@.+\..+/
    }
    let validationRules = {
        name: {
            rule: 'name',
            msg: 'Please, write a correct name!'
        },
        phone: {
            rule: 'phone',
            msg: 'Please, writte a correct phone number!'
        },
        email: {
            rule: 'email',
            msg: 'Please, writte a correct email adress'
        }
    }
    form.addEventListener('submit', function(e){
        let isErr = false;
        inputs.forEach(item=>{
            let validRuleType = validationRules[item.name];
            let vType = validRuleType.rule;
            let pattern = patterns[vType];
            let val = item.value.trim();
            let errMsg = item.nextElementSibling;
            if(!pattern.test(val)){
                item.classList.add('err');
                errMsg.innerHTML = validRuleType.msg
                isErr = true
                if(isErr){
                    e.preventDefault();
                    console.log('False')
                } 
            }
            /*if(isErr === true){
                item.classList.remove('err');
                errMsg.innerHTML = ''
                console.log('true');
            } 
        })
    })
})*/