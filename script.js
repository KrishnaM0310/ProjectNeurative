// Function to handle smooth scrolling when 'Learn More' button is clicked
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listener for 'Learn More' button click
document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.querySelector('.btn');

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            scrollToSection('about'); // Replace 'about' with the ID of the section you want to scroll to
        });
    }
});


