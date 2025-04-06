// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const changeTextBtn = document.getElementById('change-text');
    const changeStyleBtn = document.getElementById('change-style');
    const toggleElementBtn = document.getElementById('toggle-element');
    const dynamicBox = document.getElementById('dynamic-box');
    const optionalArticle = document.getElementById('optional-article');
    
    // Counter for text changes
    let clickCount = 0;
    
    // 1. Change text content dynamically
    changeTextBtn.addEventListener('click', function() {
        clickCount++;
        dynamicBox.innerHTML = `
            <p>Text has been changed ${clickCount} time${clickCount !== 1 ? 's' : ''}.</p>
            <p>The current date is: ${new Date().toLocaleString()}</p>
        `;
    });
    
    // 2. Modify CSS styles via JavaScript
    changeStyleBtn.addEventListener('click', function() {
        // Toggle between different styles
        if (dynamicBox.style.backgroundColor === 'lightblue') {
            dynamicBox.style.backgroundColor = '#ffeb3b';
            dynamicBox.style.color = 'black';
            dynamicBox.style.border = '2px dashed #ff5722';
        } else {
            dynamicBox.style.backgroundColor = 'lightblue';
            dynamicBox.style.color = 'white';
            dynamicBox.style.border = '2px solid #2196F3';
        }
    });
    
    // 3. Add or remove an element when a button is clicked
    toggleElementBtn.addEventListener('click', function() {
        if (optionalArticle.style.display === 'none') {
            optionalArticle.style.display = 'block';
            toggleElementBtn.textContent = 'Hide Element';
        } else {
            optionalArticle.style.display = 'none';
            toggleElementBtn.textContent = 'Show Element';
        }
    });
});