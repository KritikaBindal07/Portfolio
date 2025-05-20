
const projectItems = document.querySelectorAll('.tm-contact-item');

projectItems.forEach(item => {
  item.addEventListener('click', function() {
    const link = item.getAttribute('data-link'); 
    window.open(link, '_blank');
  });
});
