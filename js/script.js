function changeContent() {
    document.getElementById('dynamicContent').innerHTML = '<p>Content has been updated! Welcome to the interactive section!</p>';
}

document.getElementById('golferForm').onsubmit = function(event) {
    const golferName = document.getElementById('golferName').value;
    if (golferName === "") {
        alert("Please enter a golfer name.");
        event.preventDefault();
    }
};

document.querySelector('button[type="reset"]').addEventListener('click', function() {
    alert('Form has been reset');
});