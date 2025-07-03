let adminName = document.getElementById('admin-name');
let adminID = document.getElementById('admin-id');

adminName.innerHTML = localStorage.getItem('admin-user');
adminID.innerHTML = 'admin';


//FOR DASHBOARD
document.getElementById('dash-title').innerHTML = localStorage.getItem('dashboardTitle');
document.getElementById('dash-des').innerHTML = localStorage.getItem('dashboardDes');

function submitDashboard(event) {
  event.preventDefault();
  let dashboardTitle = document.getElementById('i-dashboard-title').value; 
  let dashboardDes = document.getElementById('i-dashboard-des').value;

  localStorage.setItem('dashboardTitle', dashboardTitle);
  localStorage.setItem('dashboardDes', dashboardDes);

  window.location.reload();

}

function deleteDashboard() {
  localStorage.setItem('dashboardTitle', "");
  localStorage.setItem('dashboardDes', "");
  window.location.reload();
}

//FOR ANNOUNCEMENT
document.getElementById('announce-title').innerHTML = localStorage.getItem('announceTitle');
document.getElementById('announce-des').innerHTML = localStorage.getItem('announceDes');

function submitAnnouncement() {
  let announcementTitle = document.getElementById('i-announcement-title').value;
  let announcementDes = document.getElementById('i-announcement-des').value;

  localStorage.setItem('announceTitle', announcementTitle);
  localStorage.setItem('announceDes', announcementDes);

  window.location.reload();
}

function deleteAnnouncement() {
  localStorage.setItem('announceTitle', '');
  localStorage.setItem('announceDes', '');

  window.location.reload();
}




//SHOW FORM
let form = true;
let showBtn = document.getElementById('showbtn');
function showHide(event) {
  event.preventDefault();

  let formHolder = document.getElementById('form-holder');

  if (form) {
    formHolder.style = 'display: flex;';
    showBtn.innerText = 'Hide Form';
    form = false
  } else {
    formHolder.style = 'display: none; ';
    showBtn.innerText = 'Show Form';
    form = true;
  }
}

//
function goEditProfile() {
  window.location.href = '../pages/edit-admin-profile.html';
}