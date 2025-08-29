// Function to handle image upload
function handleImageUpload() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profileImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    
    input.click();
}

// Add click event to image for easy replacement
document.getElementById('profileImage').addEventListener('click', handleImageUpload);

// Function to update the name
function updateName() {
    const name = prompt('Enter the name for the birthday card:');
    if (name) {
        document.querySelector('.name-text').textContent = name;
    }
}

// Add click event to name for easy editing
document.querySelector('.name-text').addEventListener('click', updateName);

// Add some interactive sparkles on mouse move
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.95) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '20px';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkleAnim 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        document.body.removeChild(sparkle);
    }, 1000);
}
