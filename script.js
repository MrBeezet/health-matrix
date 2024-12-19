// Get the button and hero section elements
const getStartedButton = document.querySelector('.hero-content button');
const heroSection = document.querySelector('.hero');

// Add an event listener to the button
getStartedButton.addEventListener('click', () => {
  // Scroll to the features section
  document.querySelector('.features').scrollIntoView({ behavior: 'smooth' });
});