const buttons = document.querySelectorAll('.indicator-button');

// Function to handle button activation
function handleButtonClick(event) {
    event.preventDefault();
    
    buttons.forEach(button => {
      button.classList.remove('active');
    });

    event.target.classList.toggle('active');
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Function to Display the Uploaded Image. 
function uploadImage() {
    const fileInput = document.getElementById('uploader');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
  
        reader.onload = function(e) {
          const imgElement = document.getElementById('uploadedImage');
          imgElement.src = e.target.result;
        };
    
        reader.readAsDataURL(file);
    } else {
      console.log('No file selected.');
    }
}

function gradeImage() {
  
}