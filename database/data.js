// Function to display stored data
function displayStoredData() {
    const dataList = document.getElementById('dataList');
    dataList.innerHTML = ''; // Clear previous data

    // Retrieve data from localStorage
    let storedData = JSON.parse(localStorage.getItem('healthData')) || [];

    // Display each data item
    storedData.forEach((data, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Name:</strong> ${data.name}<br>
            <strong>Age:</strong> ${data.age}<br>
            <strong>Gender:</strong> ${data.gender}<br>
            <strong>Mobile No.:</strong> ${data.phnumber}<br>
            <strong>Health Data:</strong> ${data.healthData}
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        dataList.appendChild(listItem);
    });

    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            deleteData(index);
        });
    });
}

// Function to delete specific data
function deleteData(index) {
    let storedData = JSON.parse(localStorage.getItem('healthData')) || [];

    // Remove the data at the specified index
    storedData.splice(index, 1);

    // Save the updated data back to localStorage
    localStorage.setItem('healthData', JSON.stringify(storedData));

    // Refresh the displayed data
    displayStoredData();
}

// Call the function to display data on page load
displayStoredData();