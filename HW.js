function displayResume() {
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthDate").value;
    const studentid = document.getElementById("studentID").value;
    const admissiondate  = document.getElementById("admissionDate").value;
    const graddate  = document.getElementById("GradDate").value;
    const degree  = document.getElementById("degree").value;
    const major  = document.getElementById("major").value;
    

    // Display the details
    const resumeDetails = `
    Name:${name} 
    Date of Birth: ${birthdate}             StudentID: ${studentid}
    Date of Admission: ${admissiondate}     Date of Graduation: ${graddate}
    Degree: ${degree}
    Major: ${major} 

`;  

    // Show the details in an alert
    alert(resumeDetails);
}