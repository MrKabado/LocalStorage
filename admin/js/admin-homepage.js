let adminName = document.getElementById('admin-name');
let adminID = document.getElementById('admin-id');

adminName.innerHTML = localStorage.getItem('admin-user');
adminID.innerHTML = 'admin';


//FOR DASHBOARD
document.getElementById('dash-title').innerHTML = localStorage.getItem('dashboardTitle');
document.getElementById('dash-des').innerHTML = localStorage.getItem('dashboardDes');

let dashboard = document.getElementById('dashboard');

let announcementTitle = document.getElementById('i-announcement-title').value;
let announcementDes = document.getElementById('i-announcement-des').value;

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

//ANNOUNCEMENT


//SHOW FORM
let form = true;
function showHide(event) {
  event.preventDefault();

  let formHolder = document.getElementById('form-holder');

  if (form) {
    formHolder.style = 'display: flex;';
    form = false
  } else {
    formHolder.style = 'display: none; ';
    form = true;
  }
}