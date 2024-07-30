  function toggleContent(element) {
    // Close other CSCells
    document.querySelectorAll('.CSCell').forEach(cell => {
      if (cell !== element) {
        cell.classList.remove('active');
        cell.style.height = 'auto';
      }
    });
  
    // Toggle the clicked CSCell
    element.classList.toggle('active');
  
    // Adjust height
    if (element.classList.contains('active')) {
      const hiddenContent = element.querySelector('.hidden-content');
      element.style.height = element.scrollHeight + hiddenContent.scrollHeight + 'px';
    } else {
      element.style.height = 'auto';
    }
  }