
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Simple reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting) ent.target.classList.add('show');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.section, .hero, .timeline-item, .skill').forEach(el=> io.observe(el));

  // Contact form submit (demo): show message
  window.submitContact = function(e){
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    msg.textContent = 'Thanks — your message has been recorded (demo). Please email directly to asuncionrhience@gmail.com for immediate contact.';
    msg.style.color = '#bdbdbd';
    e.target.reset();
    return false;
  };

  // Theme toggle: cycles through themes
  const themes = ['theme-blackgold','theme-goldwhite','theme-blacksilver'];
  let current = 0;
  const btn = document.getElementById('theme-toggle');
  btn.addEventListener('click', ()=>{
    current = (current + 1) % themes.length;
    document.body.classList.remove(...themes);
    document.body.classList.add(themes[current]);
  });

});