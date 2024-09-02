
// Submit link event listener
document.getElementById('submit-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('upload-form').submit(); // Trigger the form submission
});