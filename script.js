(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('links');
  function set(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  }
  btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  document.getElementById('yr').textContent = new Date().getFullYear();
})();
