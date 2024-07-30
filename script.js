  document.addEventListener('DOMContentLoaded', (event) => {
    const words = ["web developer", "programmer", "database designer", "systems designer"];
    let wordIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150; 
    const erasingSpeed = 100; 
    const delayBetweenWords = 2000; 
    const dynamicTextElement = document.getElementById('dynamic-text');

    function typeWord() {
      if (charIndex < words[wordIndex].length) {
        dynamicTextElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWord, typingSpeed);
      } else {
        setTimeout(eraseWord, delayBetweenWords);
      }
    }

    function eraseWord() {
      if (charIndex > 0) {
        dynamicTextElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseWord, erasingSpeed);
      } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, typingSpeed);
      }
    }

    setTimeout(typeWord, delayBetweenWords);
  });
  
  function toggleContent(element) {
    document.querySelectorAll('.CSCell').forEach(cell => {
      if (cell !== element) {
        cell.classList.remove('active');
        cell.style.height = 'auto';
      }
    });
  
    element.classList.toggle('active');
  
    if (element.classList.contains('active')) {
      const hiddenContent = element.querySelector('.hidden-content');
      element.style.height = element.scrollHeight + hiddenContent.scrollHeight + 'px';
    } else {
      element.style.height = 'auto';
    }
  }

  let scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }