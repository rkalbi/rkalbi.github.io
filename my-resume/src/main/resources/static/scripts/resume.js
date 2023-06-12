// Add your JavaScript code here
document.addEventListener("DOMContentLoaded", function() {
    var toggleButtons = document.querySelectorAll('.toggle');
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var sectionContent = button.parentElement.nextElementSibling;
            sectionContent.classList.toggle('expanded');
            button.textContent = (sectionContent.classList.contains('expanded')) ? '-' : '+';
        });

        // Expand all section contents by default
        var sectionContent = button.parentElement.nextElementSibling;
        sectionContent.classList.add('expanded');
        button.textContent = '-';
    });
});

