document.addEventListener('DOMContentLoaded', function() {
    const circleContainers = document.querySelectorAll('.circle-container');
  
    function loadCircle(circleContainer) {
      const circleText = circleContainer.querySelector('.circle-text');
      const percent = circleContainer.getAttribute('data-percent');
  
      const fill = document.createElement('div');
      fill.className = 'fill';
      circleContainer.querySelector('.progress').appendChild(fill);
      
      const right = document.createElement('div');
      right.className = 'fill';
      right.style.transform = `rotate(${percent * 3.6}deg)`;
      fill.appendChild(right);
      
      circleText.textContent = `${percent}%`;
    }
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function onScroll() {
      circleContainers.forEach(circleContainer => {
        if (isElementInViewport(circleContainer)) {
          loadCircle(circleContainer);
        }
      });
    }
  
    window.addEventListener('scroll', onScroll);
    onScroll(); // Check immediately in case the element is already in view
  });