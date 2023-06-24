//enter
function firstSec() {
  document.getElementById('redPill').innerHTML = `<a href="#sec2"><img src="images/redPill.jpg" alt="Red" id="red"></a>`

  document.getElementById('bluePill').innerHTML = `<a href="#"><img src="images/bluePill.jpg" alt="Blue" id="blue"></a> `
}
firstSec();

const blue = document.getElementById('bluePill');
const popuppWrapper = document.getElementById('popupWrapper');
const red = document.getElementById('red');



blue.addEventListener('click', function () {
  popuppWrapper.style.display = "block";
  document.getElementById('popup').innerHTML = `<h2>Are you sure?</h2>    <div id="btns"><button class="btn" onclick="goBack()">Go back</button><button class="btn" onclick="outPage()">Yes</button></div>`

});

function goBack() {
  popuppWrapper.style.display = "none";
}
function outPage() {
  document.location.href = "Error404.html";
}

//about
class AboutMe {
  constructor(myName, myPro, email, gitHub, linkedin, phone) {
    this.myName = myName;
    this.myPro = myPro;
    this.email = email;
    this.gitHub = gitHub;
    this.linkedin = linkedin;
    this.phone = phone;
  }
  get(propName) {
    return this[propName]
  }
  set(propName, value) {
    return this[propName] = value;
  }
}

let aboutRan = new AboutMe(" Ran Yohanan", " Fullstack web Developer", " yohananran3@gmail.com", " github.com/ranyohanan", " Ran Yohanan", " 055 - 8822746");

function secondSec() {
  document.getElementById('abouts1').innerHTML = `<div class="about2"><h3>My Name</h3><p class="pabout">${aboutRan.myName}</p></div><div class="about2"><h3>My Profession </h3><p class="pabout">${aboutRan.myPro}</p></div><div class="about2"><h3>My Email </h3><p class="pabout"><a href="mailto:yohananran3@gmail.com">${aboutRan.email}</a></p></div><div class="about2"><h3>My Github </h3><p class="pabout"><a href="https://github.com/ranyohanan" target="_blank">${aboutRan.gitHub}</a></p></div><div class="about2"><h3>My Linkedin </h3><p class="pabout"><a href="https://www.linkedin.com/in/ran-yohanan/" target="_blank">${aboutRan.linkedin}</a></p></div><div class="about2"><h3>My Phone Number </h3><p class="pabout"><a href="tel:0558822746">${aboutRan.phone}</a></p></div>`
}
secondSec();

//abillities
let languages = [
  "images/bootstrap.jpg",
  "images/css3.jpg",
  "images/html5.jpg",
  "images/javascript.jpg",
  "images/typescript.jpg",
  "images/react.jpg"
]

let techniques = [
  "Rest API",
  "Node.js",
  "Mongo DB",
  "Sass",
  "jQuery",
]

function thirdSec() {
  for (let pic of languages) {
    document.getElementById('boxes').innerHTML += `<div class="langPic"><img src="${pic}"></div> `
  }
  document.getElementById('moreTech').innerHTML = `<h2>More Techniques</h2><h4>${techniques[0]}</h4><h4>${techniques[1]}</h4><h4>${techniques[2]}</h4><h4>${techniques[3]}</h4><h4>${techniques[4]}</h4>`
}
thirdSec();

function downloadFile() {
  location.href = 'documents/RanYohananResume.docx';
}

//protfolio gallery
class ProjectDetails {
  constructor(image, name, descrip, languages, git, site) {
    this.image = image;
    this.name = name;
    this.descrip = descrip;
    this.languages = languages;
    this.git = git;
    this.site = site;
  }
  get(propName) {
    return this[propName]
  }
  set(propName, value) {
    return this[propName] = value;
  }
  getInfo1() {
    document.getElementById('projectsRow1').innerHTML += `<div><div class="projectTitle"><h3><a href="${this.site}" target="blank_">${this.name}</a><h3></div><div class="proBox"><h5>${this.name}</h5><p class="pProjects">${this.descrip}</p><p class="pProjects"><span class="pSpan">Coding Techniques</span> ${this.languages}</p><p class="pProjects"><a href="${this.git}" target="blank_"><span class="pSpan">Github<i class="fa-brands fa-github fa-sm" style="color:#22b455; margin-left:0.5rem"></i></span></a></p><img src="${this.image}" class="proImg"></div></div>`
  }
  getInfo2() {
    document.getElementById('projectsRow2').innerHTML += `<div><div class="projectTitle"><h3><a href="${this.site}" target="blank_">${this.name}</a><h3></div><div class="proBox"><h5>${this.name}</h5><p class="pProjects">${this.descrip}</p><p class="pProjects"><span class="pSpan">Coding Techniques</span> ${this.languages}</p><p class="pProjects"><a href="${this.git}" target="blank_"><span class="pSpan">Github<i class="fa-brands fa-github fa-sm" style="color:#22b455; margin-left:0.5rem"></i></span></a></p><img src="${this.image}" class="proImg"></div></div>`
  }
}

let projects = [
  new ProjectDetails("images/mardiScreenShot.jpg", "Mardi Gras", "Mardi Gras festival information site", "HTML5,CSS,JavaScript,     Bootstrap", "https://github.com/ranyohanan/Mardi-Gras-Project", "https://ransmardigras.netlify.app"),
  new ProjectDetails("images/myAccount.jpg", "My Account", "A program that calculate your total incomes & outcomes", "HTML5,CSS,JavaScript,     Bootstrap", "https://github.com/ranyohanan/project-account", "https://myaccountbyran.netlify.app"),
  new ProjectDetails("images/ManageU.jpg", "ManageU", "The place for you to write down all your tasks", "HTML5,CSS,JavaScript,    TypeScript,Bootstrap", "https://github.com/ranyohanan/manageu", "https://ranyohananmanageu.netlify.app"),
  new ProjectDetails("images/serieA.jpg", "Serie A guess program", "Try to guess the right team!", "HTML5,CSS,JavaScript", "https://github.com/ranyohanan/serie-a", "https://seriaa-guess-ran.netlify.app"),
]

for (let i = 0; i < 3; i++) {
  projects[i].getInfo1();
}
for (let i2 = 3; i2 < 4; i2++) {
  projects[i2].getInfo2();
}

//contact
const contactBtn = document.getElementById('contactBtn');
const Fname = document.getElementById('Fname');
const email = document.getElementById('email');
const tArea = document.getElementById('tArea');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
contactBtn.addEventListener('click', function () {

  if (Fname.value == '') {
    error1.innerHTML = 'Please Enter Name!';
    error1.style.color = 'red';
    Fname.focus();
  }
  else if (email.value == '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    error2.innerHTML = 'Please Enter Email!';
    error2.style.color = 'red';
    email.focus();
  } else if (tArea.value == '') {
    error3.innerHTML = 'Please Enter Message!';
    error3.style.color = 'red';
    tArea.focus();
  }
  else {
    location.href = "contactInfo.html"
    let user = {
      fullName: document.getElementById("Fname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("tArea").value,
    }
    localStorage.setItem("user", JSON.stringify(user));
  }
});

//social media icons

class socialMedia {
  constructor(icon, link) {
    this.icon = icon;
    this.link = link;
  }
  get(propName) {
    return this[propName]
  }
  set(propName, value) {
    return this[propName] = value;
  }
}

let icons = [
  {
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/ranyo_/",
  },
  {
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/ran-yohanan/",
  },
  {
    icon: "fa-brands fa-github",
    link: "https://github.com/ranyohanan",
  },

];


for (let icon1 = 0; icon1 < 3; icon1++) {
  document.getElementById('mediaIcons').innerHTML += `<a href="${icons[icon1].link}" target="blank_"><i class="${icons[icon1].icon}" style="color:#22b455;  margin-right:2vw"></i></a>`
}

