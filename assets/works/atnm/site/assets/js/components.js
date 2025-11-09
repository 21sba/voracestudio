/**
 * Components.js - Reusable HTML components for The Noise Machine project
 * 
 * This file contains JavaScript code to create reusable HTML components
 * that can be included across multiple pages without duplicating HTML code.
 */

// Create a class for the Menubar component
class Menubar extends HTMLElement {
    connectedCallback() {
        // Check if we're on mobile (using CSS media query)
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        
        if (isMobile) {
            // For mobile: split into top and bottom bars
            this.innerHTML = `
            <div id="menubar-top">
                <div id="menubar-logo">
                    <a href="index.html">
                        <img src="assets/img/ATNM - Logo Horizontal Red.svg" alt="ATNM Logo" />
                    </a>
                </div>
            </div>
            <div id="menubar">
                <nav id="menubar-nav">
                    <a href="index.html">HOME</a>
                    <a href="thesis.html">THESIS</a>
                    <a href="zine.html">ZINE</a>
                    <a href="video.html">VIDEO</a>
                    <a href="audio.html">AUDIO</a>
                </nav>
            </div>
            `;
        } else {
            // For desktop: keep the original single menubar
            this.innerHTML = `
            <div id="menubar">
                <div id="menubar-logo">
                    <a href="index.html">
                        <img src="assets/img/ATNM - Logo Horizontal Red.svg" alt="ATNM Logo" />
                    </a>
                </div>
                <nav id="menubar-nav">
                    <a href="index.html">HOME</a>
                    <a href="thesis.html">THESIS</a>
                    <a href="zine.html">ZINE</a>
                    <a href="video.html">VIDEO</a>
                    <a href="audio.html">AUDIO</a>
                </nav>
            </div>
            `;
        }
        
        // Add resize listener to update the menubar when screen size changes
        window.addEventListener('resize', () => {
            this.updateMenubar();
        });
    }
    
    updateMenubar() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const currentIsMobile = this.querySelector('#menubar-top') !== null;
        
        // Only update if the layout needs to change
        if (isMobile !== currentIsMobile) {
            this.connectedCallback();
        }
    }
}

// Register the custom element
customElements.define('tnm-menubar', Menubar);

// Add custom cursor interaction for menubar links
document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('customCursor');
    
    // If custom cursor exists, add interaction for menubar links
    if (customCursor) {
        // Update cursor position on mouse move
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
            
            // Show the cursor when the user moves the mouse
            if (customCursor.style.opacity !== '1') {
                customCursor.style.opacity = '1';
            }
        });
        
        // Add hover effect for all interactive elements
        const interactiveElements = document.querySelectorAll('button, a, .nav-link, #menubar-nav a');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                customCursor.style.width = '30px';
                customCursor.style.height = '30px';
                customCursor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                customCursor.style.width = '20px';
                customCursor.style.height = '20px';
                customCursor.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            });
        });
    }
});

// Log a message to confirm the component is loaded
console.log('TNM Components loaded successfully');