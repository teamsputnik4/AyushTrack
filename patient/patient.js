// User Form Submission
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phnumber = document.getElementById('phnumber').value;
    const healthData = document.getElementById('healthData').value;

    // Get selected gender
    let gender = '';
    if (document.getElementById('dot-1').checked) {
        gender = 'Male';
    } else if (document.getElementById('dot-2').checked) {
        gender = 'Female';
    } else if (document.getElementById('dot-3').checked) {
        gender = 'Prefer not to say';
    }

    // Create a data object
    const data = { name, age, gender, phnumber, healthData };

    // Retrieve existing data from localStorage
    let storedData = JSON.parse(localStorage.getItem('healthData')) || [];

    // Add new data to the array
    storedData.push(data);

    // Save updated data back to localStorage
    localStorage.setItem('healthData', JSON.stringify(storedData));

    // Display success message
    document.getElementById('userMessage').textContent = 'Data updated successfully!';

    // Clear form
    document.getElementById('userForm').reset();
});