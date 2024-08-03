function validateForm() {
    let isValid = true;

    const registerNo = document.getElementById("registerNo").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subjectCode = document.getElementById("subjectCode").value;
    const subjectName = document.getElementById("subjectName").value;
    const credit = document.getElementById("credit").value;
    const phoneNo = document.getElementById("phoneNo").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const semester = document.getElementById("semester").value;

    var core = document.getElementById("core").value;
    
    const PEReg = /^[a-zA-Z]{2}[0-9]{2}[a-zA-Z]{1}[0-9]{2}$/;
    const CReg = /^[a-zA-Z]{2}[0-9]{5}$/;
    const OEReg = /^[a-zA-z]{2}[a-zA-z\d]{5}$/;



    // Clear all error messages
    document.querySelectorAll('.error-message').forEach(error => error.innerHTML = "");

    if (registerNo.length !== 9 || isNaN(registerNo)) {
        document.getElementById("registerNoError").innerHTML = "Register No must be exactly 9 digits.";
        isValid = false;
    }

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required.";
        isValid = false;
    }

    const emailPattern =  /^([\w-]+(\.[\w-]+)*)@([\w-]+)\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Email must be in the correct format (e.g., user@example.com).";
        isValid = false;
    }

    

    if (subjectName === "") {
        document.getElementById("subjectNameError").innerHTML = "Subject name is required.";
        isValid = false;
    }

    if (credit === "" || isNaN(credit)) {
        document.getElementById("creditError").innerHTML = "Credit is required and must be a number.";
        isValid = false;
    }

    if (phoneNo.length !== 10 || isNaN(phoneNo)) {
        document.getElementById("phoneNoError").innerHTML = "Phone No must be exactly 10 digits.";
        isValid = false;
    }

    if (!gender) {
        document.getElementById("genderError").innerHTML = "Gender is required.";
        isValid = false;
    }

    if (department === "") {
        document.getElementById("departmentError").innerHTML = "Department is required.";
        isValid = false;
    }
    if (semester === "") {
        document.getElementById("semesterError").innerHTML = "Semester is required.";
        isValid = false;
    }
    if (year === "") {
        document.getElementById("yearError").innerHTML = "year is required.";
        isValid = false;
    }
    if (department === "") {
        document.getElementById("departmentError").innerHTML = "Select the department.";
        isValid = false;
    }

    if (core === "") {
        coreError.innerHTML="Select Category";
        document.getElementById("core").focus();
         isvalid= false;
    }

    if ((subjectCode === "") || ((core==="PE" && !PEReg.test(subjectCode)) || (core==="Core" && !CReg.test(subjectCode)) || (core==="OE" && !OEReg.test(subjectCode))))
        {
        subjectCodeError.innerHTML="Please enter a valid Subject Code.";
        document.getElementById("subjectCode").focus();
         isvalid= false;
        }
    
    if (isValid) {
        alert("Form submitted successfully!");
    }

   
}
// document.querySelectorAll('.error-message') selects all elements with the class error-message. In this case, it selects the three div elements.

// .forEach(error => error.innerHTML = "") iterates over each of these selected div elements. For each element, it sets the innerHTML property to an empty string (""), effectively removing the text inside them