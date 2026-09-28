const slides = [...document.querySelectorAll('.slide')];
let current = 0;

function render(){
  slides.forEach((s,i)=>s.classList.toggle('active',i===current));
  document.getElementById('counter').textContent = `${current+1} / ${slides.length}`;
  document.getElementById('progress').style.width = `${((current+1)/slides.length)*100}%`;
  document.getElementById('bgNumber').textContent = String(current+1).padStart(2,'0');
  window.location.hash = current + 1;
}
function next(){ if(current < slides.length-1){current++;render();}}
function prev(){ if(current > 0){current--;render();}}
document.getElementById('next').onclick=next;
document.getElementById('prev').onclick=prev;

document.addEventListener('keydown', e=>{
  if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();next();}
  else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();prev();}
  else if(e.key==='Home'){current=0;render();}
  else if(e.key==='End'){current=slides.length-1;render();}
  else if(e.key==='f' || e.key==='F'){
    if(!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }
});
const hash = parseInt(location.hash.replace('#',''),10);
if(hash>=1 && hash<=slides.length){current=hash-1;}
render();
