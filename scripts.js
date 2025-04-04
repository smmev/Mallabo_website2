
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').innerText = new Date().getFullYear();
  
  // Mobile menu toggle
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const sidebar = document.getElementById('sidebar');
  
  if (mobileNavToggle && sidebar) {
    mobileNavToggle.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
  }
  
  // Portfolio filter functionality
  const portfolioFilters = document.querySelectorAll('.portfolio-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (portfolioFilters.length > 0 && portfolioItems.length > 0) {
    portfolioFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        // Remove active class from all filters
        portfolioFilters.forEach(item => item.classList.remove('active'));
        
        // Add active class to current filter
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Show/hide portfolio items based on filter
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Validate form (simple validation)
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Here you would typically send the form data to a server
      // For now, just show a success message
      alert('Thank you! Your message has been sent.');
      contactForm.reset();
    });
  }
  
  // Add animations to elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animate-fadeIn');
      }
    });
  };
  
  // Run once on load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Skills bar animation
  const skillBars = document.querySelectorAll('.skill-progress');
  
  if (skillBars.length > 0) {
    const animateSkills = function() {
      skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent;
      });
    };
    
    // Run once on load
    setTimeout(animateSkills, 500);
  }
});
