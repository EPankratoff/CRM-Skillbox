import { createContactItem } from "./createContact.js";
import { svgContactDefault, svgContactHover, svgSpinner } from "./svg.js";

export const createClientsForm = () => {
  //createElemet
  const modalTitle = document.createElement("h2");
  const modalClose = document.createElement("button");
  const form = document.createElement("form");
  const inputName = document.createElement("input");
  const lableName = document.createElement("label");
  const inputSurname = document.createElement("input");
  const lableSurname = document.createElement("label");
  const inputLastname = document.createElement("input");
  const lableLastname = document.createElement("label");
  const requiredName = document.createElement("span");
  const requiredSurname = document.createElement("span");
  const addContactBtn = document.createElement("button");
  const contactBtnSvgDefault = document.createElement("span");
  const contactBtnSvgHover = document.createElement("span");
  const saveBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");
  const contactsBlock = document.createElement("div");
  const formFloatingName = document.createElement("div");
  const formFloatingSurname = document.createElement("div");
  const formFloatingLastname = document.createElement("div");
  const saveSpiner = document.createElement("span");

  const errorBlock = document.createElement("p");
  const unacceptableLetter = document.createElement("span");
  const writeName = document.createElement("span");
  const writeSurname = document.createElement("span");
  const writeLastname = document.createElement("span");
  const requiredValue = document.createElement("span");
  const requiredContacts = document.createElement("span");

  //adding class/type/id
  saveSpiner.classList.add("modal__spinner");
  modalTitle.classList.add("modal__title");
  modalClose.classList.add("modal__close");
  form.classList.add("modal__form");
  formFloatingName.classList.add("form-floating");
  formFloatingSurname.classList.add("form-floating");
  formFloatingLastname.classList.add("form-floating");
  inputName.classList.add("modal__input");
  inputSurname.classList.add("modal__input");
  inputLastname.classList.add("modal__input");
  lableName.classList.add("modal__label");
  lableSurname.classList.add("modal__label");
  lableLastname.classList.add("modal__label");
  requiredName.classList.add("modal__label");
  requiredSurname.classList.add("modal__label");
  addContactBtn.classList.add(
    "modal__btn-contact",
    "modal__btn-contact--active"
  );
  saveBtn.classList.add("modal__btn-save", "btn-reset", "site-btn");
  cancelBtn.classList.add("modal__btn-back", "btn-reset");
  contactBtnSvgDefault.classList.add(
    "btn-contact__svg",
    "btn-contact__svg--default",
    "btn-contact__svg--active"
  );
  contactBtnSvgHover.classList.add(
    "btn-contact__svg",
    "btn-contact__svg--hover"
  );
  contactsBlock.classList.add("modal__contact");
  lableName.for = "floatingName";
  lableSurname.for = "floatingSurname";
  lableSurname.for = "floatingLastName";
  inputName.id = "floatingName";
  inputSurname.id = "floatingSurname";
  inputLastname.id = "floatingLastName";
  inputName.type = "text";
  inputSurname.type = "text";
  inputLastname.type = "text";
  inputName.placeholder = "Имя";
  inputSurname.placeholder = "Фамилия";
  inputLastname.placeholder = "Отчество";

  errorBlock.classList.add("modal__error");
  unacceptableLetter.id = "unacceptableLetter";
  writeName.id = "writeName";
  writeSurname.id = "writeSurname";
  writeLastname.id = "writeLastName";
  requiredValue.id = "requiredValue";
  requiredContacts.id = "requiredContacts";

  saveSpiner.innerHTML = svgSpinner;
  modalTitle.textContent = "Новый клиент";
  lableName.textContent = "Имя";
  lableSurname.textContent = "Фамилия";
  lableLastname.textContent = "Отчество";
  addContactBtn.textContent = "Добавить контакт";
  saveBtn.textContent = "Сохранить";
  cancelBtn.textContent = "Отмена";
  requiredName.textContent = "*";
  requiredSurname.textContent = "*";
  contactBtnSvgDefault.innerHTML = svgContactDefault;
  contactBtnSvgHover.innerHTML = svgContactHover;
  //append
  lableName.append(requiredName);
  saveBtn.append(saveSpiner);
  lableSurname.append(requiredSurname);
  formFloatingName.append(inputName, lableName);
  formFloatingSurname.append(inputSurname, lableSurname);
  formFloatingLastname.append(inputLastname, lableLastname);
  contactsBlock.append(addContactBtn);
  errorBlock.append(
    writeName,
    writeSurname,
    writeLastname,
    requiredValue,
    unacceptableLetter,
    requiredContacts
  );
  form.append(
    formFloatingName,
    formFloatingSurname,
    formFloatingLastname,
    contactsBlock,
    errorBlock,
    saveBtn,
    cancelBtn
  );
  addContactBtn.append(contactBtnSvgDefault, contactBtnSvgHover);
  
  //add contact
  addContactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const contactsItems = document.getElementsByClassName("contact");

    if (contactsItems.length < 9) {
      const contactItem = createContactItem();
      contactsBlock.prepend(contactItem.contact);
      contactsBlock.style.backgroundColor = "var(--clr-athens-gray)";
      if (contactsItems.length >= 5) {
        document.querySelector(".modal__content").style.top = "70%";
      } else {
        document.querySelector(".modal__content").style.top = "50%";
      }
    } else {
      const contactItem = createContactItem();
      contactsBlock.prepend(contactItem.contact);
      addContactBtn.classList.remove("modal__btn-contact--active");
    }
  });

  addContactBtn.addEventListener("mousemove", () => {
    contactBtnSvgDefault.classList.remove("btn-contact__svg--active");
    contactBtnSvgHover.classList.add("btn-contact__svg--active");
  });

  addContactBtn.addEventListener("mouseleave", () => {
    contactBtnSvgDefault.classList.add("btn-contact__svg--active");
    contactBtnSvgHover.classList.remove("btn-contact__svg--active");
  });

  return {
    form,
    modalClose,
    modalTitle,
    cancelBtn,
    inputName,
    inputSurname,
    inputLastname,
    lableName,
    lableSurname,
    lableLastname,
    contactsBlock,
    addContactBtn,
  };
};
