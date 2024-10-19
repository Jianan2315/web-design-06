// edit.js
document.getElementById('save-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const major = document.getElementById('major').value;
    const experience = document.getElementById('experience').value;

    const preview = document.getElementById('resume-preview');
    preview.innerHTML = `
    <h2>${name}</h2>
    <h3>${major}</h3>
    <p>${experience}</p>
  `;
});

// Load selected template
window.addEventListener('load', function() {
    const params = new URLSearchParams(window.location.search);
    const templateId = params.get('template');

    // You can use templateId to load different templates
    // For simplicity, we'll just display the template ID
    const preview = document.getElementById('resume-preview');
    preview.innerHTML = `<p>Selected Template ID: ${templateId}</p>`;
});
