const btnMore = document.querySelectorAll('.main_qtd__card--buttons-more');
const btnLess = document.querySelectorAll('.main_qtd__card--buttons-less');
const cards = document.querySelectorAll('.main_qtd__card');
const btnCalc = document.querySelector('.main_button');

const morePeople = (event) => {
  const target = event.target;
  const parent = target.closest('.main_qtd__card');
  const qtd = parent.querySelector('.main_qtd__card--value');
  qtd.innerText = parseInt(qtd.innerText) + 1;
}

const lessPeople = (event) => {
  const target = event.target;
  const parent = target.closest('.main_qtd__card');
  const qtd = parent.querySelector('.main_qtd__card--value');
  if(qtd.innerText >= 1){
    qtd.innerText = parseInt(qtd.innerText) - 1;
  }
}


const calcPeople = () => {
  const result = document.querySelector(".main_result");
  let sumPeople = 0;
  let sumMeet = 0;
  let sumBread = 0;
  let sumCoal = 0;
  let sumSalt = 0;
  let sumIce = 0;
  let sumRefri = 0;
  let sumWater = 0;
  let sumAlcool = 0;
  cards.forEach(card => {
    const value = card.querySelector('.main_qtd__card--value');
    sumPeople = sumPeople + parseInt(value.innerText);
    const type = card.getAttribute('data-type');
    if(type == 'adultos'){
      sumMeet = sumMeet + 0.4;
      sumBread = sumBread + 2;
    } else if(type == 'criancas') {
      sumMeet = sumMeet + 0.2;
      sumBread = sumBread + 1;
    } else if(type == 'esfomeados'){
      sumMeet = sumMeet + 1;
      sumBread = sumBread + 5;
    }
    sumCoal = sumCoal + 1;
    sumSalt = sumSalt +  0.04;
    sumIce = sumIce + 0.5;
    sumRefri = sumRefri + 0.4;
    sumWater = sumWater + 0.2;
    sumAlcool = sumAlcool + 3;
  });
  const infos = [sumMeet, sumBread, sumCoal, sumSalt, sumIce, sumRefri, sumWater, sumAlcool];
  const keys = ['sumMeet', 'sumBread', 'sumCoal', "sumSalt", 'sumIce', 'sumRefri', 'sumWater', 'sumAlcool'];
  infos.forEach((info, index) => {
    const html = document.getElementById(keys[index]);
    const texto = info.toFixed(2).toString().replace('.', ',');
    html.innerText = texto;
  })
  result.style = "display : flex"
}

document.addEventListener('DOMContentLoaded', () => {
  btnMore.forEach((btn) => btn.addEventListener('click', morePeople));
  btnLess.forEach((btn) => btn.addEventListener('click', lessPeople));
  btnCalc.addEventListener('click', calcPeople);
})
