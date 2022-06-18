function onSubmit() {
  const firstNameInput = document.querySelector(".first");
  const lastNameInput = document.querySelector(".last");
  const emailInput = document.querySelector(".email");
  const pword = document.querySelector(".pword");
  const fnameError = document.querySelector(".fnameError");
  const lnameError = document.querySelector(".lnameError");
  const emailError = document.querySelector(".emailError");
  const pwordError = document.querySelector(".pwordError");
  const emailErrorImg = document.querySelector(".email-img-error");
  const fnameErrorImg = document.querySelector(".fname-img-error");
  const lnameErrorImg = document.querySelector(".lname-img-error");
  const pwordErrorImg = document.querySelector(".pword-img-error");
  const emailRe = /^([a-z0-9_\-.]+)@([a-z]+)\.([a-z]{2,3})$/;
  const isEmailValid = emailRe.test(emailInput.value);

  if (firstNameInput.value === "") {
    fnameError.innerHTML = "First name is required";
    fnameErrorImg.style.display = "inline";
  } else {
    fnameError.innerHTML = "";
    fnameErrorImg.style.display = "none";
  }
  if (lastNameInput.value === "") {
    lnameError.innerHTML = "Last name is required";
    lnameErrorImg.style.display = "inline";
  } else {
    lnameError.innerHTML = "";
    lnameErrorImg.style.display = "none";
  }
  if (emailInput.value === "" || !isEmailValid) {
    if (emailInput.value === "") {
      emailError.innerHTML = "Email is required";
    } else {
      emailError.innerHTML = "Enter a valid email";
    }
    emailErrorImg.style.display = "inline";
  } else {
    emailError.innerHTML = "";
    emailErrorImg.style.display = "none";
  }
  if (pword.value === "") {
    pwordError.innerHTML = "Password is required";
    pwordErrorImg.style.display = "inline";
  } else {
    pwordError.innerHTML = "";
    pwordErrorImg.style.display = "none";
  }
}
