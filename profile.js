function redirectToPage() {
    const studentRadio = document.getElementById('student');
    const mentorRadio = document.getElementById('mentor');

    if (studentRadio.checked) {
        window.location.href = './log-in.html';
    } else if (mentorRadio.checked) {
        window.location.href = 'mentor.html'; 
    } else {
        alert('Please select a role before continuing.');
    }
}