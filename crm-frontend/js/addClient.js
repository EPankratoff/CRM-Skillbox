import { sendClientData } from "./clientsApi.js";
import { createClientsForm } from "./createModalForm.js";
import { validateClientContact } from "./validateContact.js";
import { validateClientForm } from "./validateForm.js";

export const addClientModal = () => {
  //add createElement
  const createForm = createClientsForm();
  const modal = document.createElement("div");
  const modalContent = document.createElement("div");
  //adding class
  modal.classList.add("modal", "site-modal", "modal-active");
  modalContent.classList.add(
    "modal__content",
    "site-modal__content",
    "modal-active"
  );
  createForm.form.classList.add("add-client");
  //append
  modal.append(modalContent);
  modalContent.append(
    createForm.modalClose,
    createForm.modalTitle,
    createForm.form
  );
  //add clients
  createForm.form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validateClientForm()) {
      return;
    }
    const contactTypes = document.querySelectorAll(".contact__name");
    const contactValues = document.querySelectorAll(".contact__input");

    let contacts = [];
    let clientObj = {};

    for (let i = 0; i < contactTypes.length; i++) {
      if (!validateClientContact(contactTypes[i], contactValues[i])) {
        return;
      }
      contacts.push({
        type: contactTypes[i].innerHTML,
        value: contactValues[i].value,
      });
    }

    clientObj.name = createForm.inputName.value;
    clientObj.surname = createForm.inputSurname.value;
    clientObj.lastName = createForm.inputLastname.value;
    clientObj.contacts = contacts;
    console.log(clientObj);

    const spinner = document.querySelector(".modal__spinner");

    try {
      spinner.style.display = "block";
      const data = await sendClientData(clientObj, "POST");
      setTimeout(() => {
        document
          .querySelector(".clients__tbody")
          .append(createClientItem(data));
        modal.remove();
      }, 700);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => (spinner.style.display = "block"), 700);
    }
  });
  //modal close
  createForm.modalClose.addEventListener("click", (e) => {
    modal.remove();
  });
  createForm.cancelBtn.addEventListener("click", (e) => {
    modal.remove();
  });

  document.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.remove();
    }
  });

  return modal;
};
