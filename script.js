const countryInput = document.querySelector(".country-ipt");
const submit = document.querySelector(".country-ipt");
const zipCodeInput = document.querySelector(".zip-ipt");

const setErrorMessage = (format) => {
  zipCodeInput.addEventListener("change", () => {
    zipCodeInput.addEventListener("invalid", () => {
      zipCodeInput.setCustomValidity(
        `Please followed ${countryInput.value} zip code format: ${format}, where A is a letter and 9 is a digit.`
      );
    });

    zipCodeInput.addEventListener("input", () => {
      zipCodeInput.setCustomValidity("");
    });
  });
};

countryInput.addEventListener("change", () => {
  console.log(typeof countryInput.value);
  if (countryInput.value === "United States") {
    zipCodeInput.setAttribute("pattern", "\bd{5}\b");

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
    zipCodeInput.setAttribute("patten", "\bd{4}\b");

    setErrorMessage("9999");
  }
  if (countryInput.value === "Canada") {
    zipCodeInput.setAttribute("pattern", "^[A-Za-z]d[A-Za-z] d[A-Za-z]d$");

    setErrorMessage("A9A 9A9");
  }
});
