let changeDisplay = document.getElementById('changeDisplay');

let editUsername = document.getElementById('editUsername');
let editStudentID = document.getElementById('editStudentID');
let editFullname = document.getElementById('editFullname');
let editPassword = document.getElementById('editPassword');

let finder = localStorage.getItem('finder');

editUsername.value = localStorage.getItem(`username${finder}`);
editStudentID.value = localStorage.getItem(`studentID${finder}`);
editFullname.value = localStorage.getItem(`studentName${finder}`);
editPassword.value = localStorage.getItem(`password${finder}`);

function goProfile() {
  window.location.href = '../pages/homepage.html';
}

function saveChanges(event) {
  event.preventDefault();

  localStorage.setItem(`username${finder}`, editUsername.value);
  localStorage.setItem(`studentID${finder}`, editStudentID.value);
  localStorage.setItem(`studentName${finder}`, editFullname.value);
  localStorage.setItem(`password${finder}`, editPassword.value);

  changeDisplay.innerText = 'Changes saved successfully'
  changeDisplay.style = 'color: green; font-size: 10px'

  setTimeout(() => {
    if (!changeDisplay) {
      changeDisplay.style = 'display: none';
    } else {
      changeDisplay.style = 'display: block';
    }
  }, 5000)
}