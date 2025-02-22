const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link"),
      tabButtons = document.querySelectorAll(".tab-button");

// Toggle password visibility
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
});

// Toggle between Login and Signup forms
links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); // Preventing form submit
       forms.classList.toggle("show-signup");
    })
});

// Handle Admin and Patient button clicks
tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove("active"));
        // Add active class to the clicked button
        button.classList.add("active");

        // Get the role from the button's onclick attribute
        const role = button.getAttribute("onclick").split("'")[1];

        // Call the function to show the appropriate form
        showForm(role);
    });
});

// Function to show the appropriate form based on the role
function showForm(role) {
    // Hide all forms or fields that are role-specific
    document.querySelectorAll('.role-specific').forEach(element => {
        element.style.display = 'none';
    });

    // Show the form or fields for the selected role
    document.querySelectorAll(`.${role}-specific`).forEach(element => {
        element.style.display = 'block';
    });
}

// Initialize the form with the default role (Admin)
showForm('admin');