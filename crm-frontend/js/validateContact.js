//Validate
export const validateClientContact = (contactType, contactInput) => {
  const writeValue = document.getElementById("writeName");
  const onlyNumbers = /[^0-9|+||( )|]+$/g;
  const onlyEmail = /[^a-zA-Z|@|.]+$/g;

  // const form = document.querySelector(".contact");
  // const telSelector = form.querySelector('input[type="tel"]');
  // const inputMask = new Inputmask("+7 (999) 999-99-99");
  // inputMask.mask(telSelector);

  const onInputValue = (input) => {
    input.addEventListener("input", () => {
      input.style.borderColor = "var(--clr-gray)";
      writeValue.textContent = "";
    });

    input.oncut =
      input.oncopy =
      input.onpaste =
        () => {
          input.style.borderColor = "var(--clr-gray)";
          writeValue.textContent = "";
        };
  };

  const showErrorMessage = (message, block, input) => {
    block.textContent = message;
    input.style.borderColor = "var(--clr-red)";
  };

  onInputValue(contactInput);

  if (!contactInput.value) {
    showErrorMessage("Заполните все поля контактов!", writeValue, contactInput);
    return false;
  }
  //validate phone/Emaile
  switch (contactType.innerHTML) {
    case "Телефон":
      if (onlyNumbers.test(contactInput.value)) {
        showErrorMessage("Допустимы только цифры!", writeValue, contactInput);
        return false;
      } else if (contactInput.value.length <= 10) {
        showErrorMessage(
          "Номер должен состоять из 11 цифр!",
          writeValue,
          contactInput
        );
        return false;
      } else if (contactInput.value.length >= 19) {
        showErrorMessage(
          "Номер должен состоять из 11 цифр!",
          writeValue,
          contactInput
        );
        return false;
      }

      return true;
    case "Email":
      if (onlyEmail.test(contactInput.value)) {
        showErrorMessage("Непарвильный Email!", writeValue, contactInput);
        return false;
      }

      return true;
    default:
      return true;
  }
};
