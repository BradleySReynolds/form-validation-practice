const countryInput = document.querySelector(".country-ipt");
const zipCodeInput = document.querySelector(".zip-ipt");
const passwordInput = document.querySelector(".pass-ipt");
const passwordConInput = document.querySelector(".passcon-ipt");
const submitButton = document.querySelector(".sumbit");

const passwords = [passwordInput, passwordConInput];

const setErrorMessage = (format) => {
  zipCodeInput.addEventListener("change", () => {
    if (zipCodeInput.validity.patternMismatch) {
      zipCodeInput.setCustomValidity(
        `Please follow this zip code format for ${countryInput.value}: ${format}, where A is a letter and 9 is a digit.`
      );
    } else {
      zipCodeInput.setCustomValidity("");
    }
  });
};

countryInput.addEventListener("input", () => {
  console.log(typeof countryInput.value);
  if (countryInput.value === "United States") {
    zipCodeInput.setAttribute("pattern", "[0-9]{5}");

    setErrorMessage("99999");
  }
  if (countryInput.value === "United Kingdom") {
    zipCodeInput.setAttribute(
      "pattern",
      "^[A-Z]{1,2}[0-9R][0-9A-Z]? [0-9][A-Z]{2}$"
    );

    setErrorMessage("AA9A 9AA or A9A 9AA");
  }
  if (countryInput.value === "Australia") {
    zipCodeInput.setAttribute("pattern", "[0-9]{4}");

    setErrorMessage("9999");
  }
  if (countryInput.value === "Canada") {
    zipCodeInput.setAttribute(
      "pattern",
      "[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
    );

    setErrorMessage("A9A 9A9");
  }
});

passwords.forEach((element) => {
  element.addEventListener("input", () => {
    if (passwordInput.value !== passwordConInput.value) {
      passwordConInput.setCustomValidity(`Passwords do not match`);
    } else {
      passwordConInput.setCustomValidity("");
    }
  });
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.validity.patternMismatch) {
    passwordInput.setCustomValidity(
      "Password must contain: 1 Uppercase, 1 Number and 1 Special Character. Password must be 8 characters long"
    );
  } else {
    passwordInput.setCustomValidity("");
  }
});
