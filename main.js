import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Populate days select
  const birthDay = document.getElementById('birth-day');
  if (birthDay) {
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      birthDay.appendChild(option);
    }
  }
  
  // Populate years select (1930-2024)
  const birthYear = document.getElementById('birth-year');
  if (birthYear) {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1930; i--) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      birthYear.appendChild(option);
    }
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
});

// Initialize counter for demo purposes
const counterElement = document.querySelector('#counter');
if (counterElement) {
  setupCounter(counterElement);
}