const filter = document.getElementById('weightFilter');
const cards = document.querySelectorAll('.card');
const p4p = document.querySelector('.p4p');

filter.addEventListener('change', ()=>{
 const v = filter.value;
 cards.forEach(c=>{
   c.style.display = (v==='all'||c.dataset.weight===v)?'block':'none';
 });
 p4p.style.display = (v==='p4p'||v==='all')?'block':'none';
});
