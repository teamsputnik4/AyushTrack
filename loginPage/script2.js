const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

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
        });
    });
});

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    });
});

function showForm(role, formType) {
    // Hide all forms of the current type (login or signup)
    document.querySelectorAll(`.${formType}-form`).forEach(form => form.classList.add('hidden'));
    
    // Show the selected form
    document.getElementById(`${role}-${formType}-form`).classList.remove('hidden');
    
    // Update active tab buttons
    const tabs = document.querySelectorAll(`.${formType} .tab-button`);
    tabs.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="showForm('${role}', '${formType}')"]`).classList.add('active');
}