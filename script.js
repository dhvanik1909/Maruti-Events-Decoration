const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.dot')];
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currentSlide = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

setInterval(() => {
  showSlide((currentSlide + 1) % slides.length);
}, 5000);

document.getElementById('bookingForm').addEventListener('submit', event => {
  event.preventDefault();

  const value = id => document.getElementById(id).value.trim();

  const mobile = value('mobile');

  if (!/^\d{10}$/.test(mobile)) {
    alert('Please enter a valid 10-digit mobile number.');
    return;
  }

  const message =
`Hello Maruti Events,

Name: ${value('name')}
Mobile: ${mobile}
Event: ${value('eventType')}
Event Date: ${value('eventDate') || 'Not decided'}
Location: ${value('location') || 'Not provided'}
Requirement: ${value('message') || '-'}`;

  window.open(
    'https://wa.me/919723828206?text=' + encodeURIComponent(message),
    '_blank'
  );
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.gallery img').forEach(image => {
  image.addEventListener('click', () => {
    lightboxImg.src = image.src;
    lightbox.classList.add('open');
  });
});

document.getElementById('closeLightbox').addEventListener('click', () => {
  lightbox.classList.remove('open');
});

lightbox.addEventListener('click', event => {
  if (event.target === lightbox) {
    lightbox.classList.remove('open');
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => {
  observer.observe(element);
});
const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;
const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});
