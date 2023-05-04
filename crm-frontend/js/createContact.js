import { svgDelete } from "./svg.js";
export const createContactItem = () => {
  //adding elements
  const contact = document.createElement("div");
  const contactType = document.createElement("div");
  const contactName = document.createElement("button");
  const contactList = document.createElement("ul");
  const contactPhone = document.createElement("li");
  const contactVk = document.createElement("li");
  const contactFb = document.createElement("li");
  const contactEmail = document.createElement("li");
  const contactOther = document.createElement("li");
  const contactInput = document.createElement("input");
  const contactDelete = document.createElement("button");
  const contactDeleteTooltip = document.createElement("span");
  

  //adding class
  contact.classList.add("contact");
  contactDeleteTooltip.classList.add("contact-tooltip", "site-tooltip");
  contactType.classList.add("contact__type");
  contactName.classList.add("contact__name");
  contactList.classList.add("contact__list", "list-reset");
  contactPhone.classList.add("contact__item");
  contactVk.classList.add("contact__item");
  contactFb.classList.add("contact__item");
  contactEmail.classList.add("contact__item");
  contactOther.classList.add("contact__item");
  contactInput.classList.add("contact__input");
  contactDelete.classList.add("contact__delete", "btn-reset");
  contactInput.classList.add("phone");

  //adding Attribute
  contactInput.setAttribute("id", "phone");
  contactInput.setAttribute("type", "tel");
  contactInput.setAttribute("data-tel-input", "tel");
  //adding text
  contactName.textContent = "Телефон";
  contactDeleteTooltip.textContent = "Удалить контакт";
  contactPhone.textContent = "Телефон";
  contactVk.textContent = "VK";
  contactEmail.textContent = "Email";
  contactFb.textContent = "Facebook";
  contactOther.textContent = "Другое";
  contactInput.placeholder = "+7 (999) 99-99-999";

  contactInput.textContent = "text";
  contactDelete.innerHTML = svgDelete;

  contactDelete.addEventListener("click", (e) => {
    e.preventDefault();
    contact.remove();
    document
      .querySelector(".modal__btn-contact")
      .classList.add("modal__btn-contact--active");
  });

  contactName.addEventListener("click", (e) => {
    e.preventDefault();
    contactList.classList.add("contact__list--active");
    contactName.classList.add("contact__list--active");
  });

  contactType.addEventListener("mouseleave", () => {
    contactList.classList.remove("contact__list--active");
    contactName.classList.remove("contact__list--active");
  });
  //choice contact__type
  const setType = (type) => {
    type.addEventListener("click", () => {
      contactName.textContent = type.textContent;
      contactList.classList.remove("contact__list--active");
      contactName.classList.remove("contact__list--active");

      if (contactName.textContent === contactPhone.textContent) {
        contactInput.setAttribute("data-tel-input", "tel");
        contactInput.setAttribute("id", "tel");
        contactInput.placeholder = "+7 (999) 99-99-999";
      } else if (contactName.textContent !== contactPhone.textContent) {
        contactInput.removeAttribute("data-tel-input");
        contactInput.removeAttribute("id");
        contactInput.placeholder = "Введите данные контакта";
      }
    });
  };
  

  const typesArray = [
    contactEmail,
    contactFb,
    contactVk,
    contactPhone,
    contactOther,
  ];

  for (const type of typesArray) {
    setType(type);
    
  }

  //append
  contactDelete.append(contactDeleteTooltip);
  contact.append(contactType, contactInput, contactDelete);
  contactType.append(contactName, contactList);
  contactList.append(
    contactPhone,
    contactEmail,
    contactVk,
    contactFb,
    contactOther
  );

  return {
    contact,
    contactName,
    contactInput,
    contactDelete,
  };
};

