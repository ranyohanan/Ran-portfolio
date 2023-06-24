document.getElementById('nameInfo').innerHTML = JSON.parse(localStorage.getItem("user")).fullName;
document.getElementById('emailInfo').innerHTML = JSON.parse(localStorage.getItem("user")).email;
document.getElementById('messageInfo').innerHTML = JSON.parse(localStorage.getItem("user")).message;