
const nutIcons = document.querySelectorAll('.nut-icon');


function logIconId() {
    
    const iconId = this.id;

    // Log the message using a template string
    console.log(`You have clicked the icon with the ID: ${iconId}`);
}


nutIcons.forEach(icon => {
    icon.addEventListener('click', logIconId);
});