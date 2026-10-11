(function(){
  const b=document.querySelector('[data-menu-button]'), n=document.querySelector('[data-nav]');
  if(b&&n){b.addEventListener('click',()=>{const open=n.classList.toggle('open');b.setAttribute('aria-expanded',String(open));});}
  document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('selected')); btn.classList.add('selected');
    const group=btn.dataset.filter;
    document.querySelectorAll('[data-portfolio]').forEach(card=>card.hidden=group!=='all'&&card.dataset.portfolio!==group);
  }));
  document.querySelectorAll('[data-lightbox]').forEach(img=>img.addEventListener('click',()=>{
    const overlay=document.createElement('div'); overlay.className='lightbox';
    overlay.innerHTML='<button class="lightbox-close" aria-label="Close">×</button><img alt="">';
    overlay.querySelector('img').src=img.src; overlay.querySelector('img').alt=img.alt;
    overlay.addEventListener('click',e=>{if(e.target===overlay||e.target.classList.contains('lightbox-close'))overlay.remove();});
    document.body.appendChild(overlay);
  }));
})();
