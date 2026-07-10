const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.topbar nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dot')];
let current=0;
function showSlide(i){slides.forEach((s,n)=>s.classList.toggle('active',n===i));dots.forEach((d,n)=>d.classList.toggle('active',n===i));current=i}
dots.forEach((d,i)=>d.addEventListener('click',()=>showSlide(i)));
setInterval(()=>showSlide((current+1)%slides.length),5000);

document.getElementById('bookingForm').addEventListener('submit',e=>{
 e.preventDefault();
 const v=id=>document.getElementById(id).value.trim();
 const text=`Hello Maruti Events,

Name: ${v('name')}
Mobile: ${v('mobile')}
Event: ${v('eventType')}
Event Date: ${v('eventDate')||'Not decided'}
Location: ${v('location')||'Not provided'}
Requirement: ${v('message')||'-'}`;
 window.open('https://wa.me/919723828206?text='+encodeURIComponent(text),'_blank');
});

const lightbox=document.getElementById('lightbox'),lightboxImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery img').forEach(img=>img.addEventListener('click',()=>{lightboxImg.src=img.src;lightbox.classList.add('open')}));
document.getElementById('closeLightbox').addEventListener('click',()=>lightbox.classList.remove('open'));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('open')});