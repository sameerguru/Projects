// portfolio.js

// Function to toggle a class on an element
function toggleClass(element, className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
  
  // Function to handle click events on project items
  function handleProjectClick(event) {
    const project = event.currentTarget;
    toggleClass(project.querySelector('.project-details'), 'hidden');
  }
  
  // Get all project items
  const projectItems = document.querySelectorAll('.project-item');
  
  // Add click event listeners to each project item
  projectItems.forEach((projectItem) => {
    projectItem.addEventListener('click', handleProjectClick);
  });
  