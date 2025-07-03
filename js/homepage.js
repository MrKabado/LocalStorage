let studentName = document.getElementById('student-name');
  studentName.innerHTML = `${localStorage.getItem(`studentName${localStorage.getItem(`finder`)}`)}`;

let studentID = document.getElementById('student-id');
  studentID.innerHTML = `${localStorage.getItem(`studentID${localStorage.getItem(`finder`)}`)}`;

document.getElementById('dash-title').innerHTML = localStorage.getItem('dashboardTitle');
document.getElementById('dash-des').innerHTML = localStorage.getItem('dashboardDes');

document.getElementById('announce-title').innerHTML = localStorage.getItem('announceTitle');
document.getElementById('announce-des').innerHTML = localStorage.getItem('announceDes');

function goEditProfile() {
  window.location.href = '../pages/edit-profile.html';
}