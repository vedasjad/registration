const valName = new RegExp("^[a-zA-Z ]{2,30}$");
const valEmail = new RegExp("^[a-zA-Z]*20[0-9]{5}@akgec\.ac\.in$");
const valStdno = new RegExp("20[0-9]{5}$");
const errorCode = ["*Max. 25, Characters Only", "*Use College Student No.", "*Use College Email ID"];

function validateForm() {

  clearErrors();
  let returnVal = true;
  const name = document.forms['myForm']["name"].value;
  const email = document.forms['myForm']["email"].value;
  const stdno = document.forms['myForm']["stdno"].value;

  if (!valName.test(name)) {
    seterror("name", errorCode[0]);
    returnVal = false;
  }

  if (!valStdno.test(stdno)) {
    seterror("studentno", errorCode[1]);
    returnVal = false;
  }

  if (!valEmail.test(email)) {
    seterror("email", errorCode[2]);
    returnVal = false;
    if(!validateemail(email)) {
        returnVal = false;
    }
  }
  return returnVal;
}

function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateemail(email) {
    var splitemail = email.split('@');

    if (splitemail[1]=='akgec.ac.in')
    return true;
    else
    return false;
}

function clearErrors() {
  errors = document.getElementsByClassName('formerror');
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function captchaCb() {
  document.getElementById("btn-submit").removeAttribute("disabled");
}

const inputs = document.querySelectorAll(".input-field");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

function moveSlider() {
  let index = this.dataset.value;
  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
}

function autofillEmail() {
  const name = document.forms[0].elements[0].value.split(" ")[0].toLowerCase();
  const stdno = document.forms[0].elements[1].value;
  document.forms[0].elements[2].value = name + stdno + "@akgec.ac.in";
}


