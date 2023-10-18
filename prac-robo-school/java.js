const openBtnModal = document.querySelector('#openBtnModal');
const modal = document.querySelector('#modal');
const cancelModalButton = document.querySelector('#cancelModalButton');
const btnAction = document.querySelector('#btnAction');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const form = document.querySelector('form');
const mod = document.querySelector('#mod');
const dom = document.querySelector('#dom');
const somePar = document.querySelector('#somePar');
const domSecond = document.querySelector('#domSecond');
const secondMod = document.querySelector('#secondMod');
const seconPar = document.querySelector('#seconPar');

openBtnModal.addEventListener('click', () => {
    // for open the modal
    modal.classList.add('open');
});

cancelModalButton.addEventListener('click', () => {
    // for delect modal
    modal.classList.remove('open');
});

// function validation(){
//   let result = true;
   
//   return result;
// }
   
form.addEventListener('submit', (event) => {
      event.preventDefault();

      const elements = event.target.elements;

      const data = {
        name: elements.name.value,
        email: elements.email.value,
        number: elements.number.value
      }

      console.log(data);
})


dom.addEventListener('click', () => {
  //open
  mod.classList.add('open');
});

somePar.addEventListener('click', () => {
  // delet
  mod.classList.remove('open');
})

domSecond.addEventListener('click', () => {
  // for open
  secondMod.classList.add('open');
})

seconPar.addEventListener('click', () => {
  // for delet
  secondMod.classList.remove('open');
})

const domThreed = document.querySelector('#domThreed');
const sordMod = document.querySelector('#sordMod');
const sordPar = document.querySelector('#sordPar');


domThreed.addEventListener('click', () => {
  // for open the modal
  sordMod.classList.add('open');
});

sordPar.addEventListener('click', () => {
  // for delet modal
  sordMod.classList.remove('open');
});

const priceBtn = document.querySelector('#priceBtn');

priceBtn.addEventListener('click', () => {
     
    const pay = prompt("Введите сумму!")

     for(let i = 0; i < 1; i++){
          if(pay > 20000){
             alert("Спасибо за оплату!!");
           } else if(pay < 20000){
             alert("Не работает, попробуйте еще раз!")
         }
     }

});

const priceSecondBtn = document.querySelector('#priceSecondBtn');

priceSecondBtn.addEventListener('click', () => {

     const pay = prompt("Введите сумму!")

     for(let i = 0; i < 1; i++){
         if(pay > 15000){
             alert("Спасибо за оплату!!");
          } else if(pay < 15000){
             alert("Не работает, попробуйте еще раз!")
           }
       }
});

const priceSordBtn = document.querySelector('#priceSordBtn');

priceSordBtn.addEventListener('click', () => {
    const pay = prompt("Введите сумму!")

    for(let i = 0; i < 1; i++){
         if(pay > 10000){
            alert("Спасибо за оплату!!");
         } else if(pay < 10000){
             alert("Не работает, попробуйте еще раз!");
         }
     }
   
});


const formating = document.querySelector('#formating');
const inputFirst = document.querySelector('#inputFirst');
const inputSecond = document.querySelector('#inputSecond');
const inputSord = document.querySelector('#inputSord');

formating.addEventListener('submit', (event) => {
  event.preventDefault();

  const elements = event.target.elements;

  const anoData = {
    name: elements.name.value,
    email: elements.email.value,
    number: elements.number.value
  }

   console.log(anoData);

});

const burger = document.querySelector('#burger');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
     header.classList.toggle('open');
});