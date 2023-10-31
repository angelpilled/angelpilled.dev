let currentSection = "about";

function showSection(selectedSection)
{
    if (selectedSection === currentSection) return;

    // else:

    const currentElement = document.getElementById(currentSection);
    const newElement = document.getElementById(selectedSection);

    // Fade out current section
    currentElement.classList.add("hidden");

    // Wait...
    setTimeout( () =>
    {
	// Hide current section
	currentElement.style.display = "none";
    
	// Show nd fade in new section
	newElement.style.display = "block";
	setTimeout( () => newElement.classList.remove("hidden"), 10);

	// Update section to new one
	currentSection = selectedSection;

    }, 300);

}
