import { deleteClientModal } from "./createDeleteModal.js";
import { editClientModal } from "./createEditModal.js";
import { svgSpinner } from "./svg.js";
import { createContactItemByType, formatDate, formatTime } from "./utils.js";

//CreateElement
export const createClientItem = (data) => {
  const clientTr = document.createElement("tr");
  const clientIdTd = document.createElement("td");
  const clientId = document.createElement("span");
  const clientFullName = document.createElement("td");
  const clientName = document.createElement("span");
  const clientSurname = document.createElement("span");
  const clientLastName = document.createElement("span");
  const clientCreated = document.createElement("td");
  const createdDate = document.createElement("span");
  const createdTime = document.createElement("span");
  const clientChanged = document.createElement("td");
  const changedDate = document.createElement("span");
  const changedTime = document.createElement("span");
  const clientContacts = document.createElement("td");
  const clientActions = document.createElement("td");
  const clientEdit = document.createElement("button");
  const clientDelete = document.createElement("button");
  const deleteClient = deleteClientModal();
  const editClient = editClientModal(data);
  const editSpinner = document.createElement("span");
  const deleteSpinner = document.createElement("span");

  //ADD CLass
  editSpinner.classList.add("actions__spinner");
  deleteSpinner.classList.add("actions__spinner");
  clientTr.classList.add("clients__item");
  clientTr.id = data.id;
  clientIdTd.classList.add("clients__id");
  clientFullName.classList.add("clients__full-name");
  clientName.classList.add("clients__name");
  clientSurname.classList.add("clients__surname");
  clientLastName.classList.add("clients__lastname");
  clientCreated.classList.add("clients__created");
  createdDate.classList.add("created__date");
  createdTime.classList.add("created__time");
  clientChanged.classList.add("clients__changed");
  changedDate.classList.add("changed__date");
  changedTime.classList.add("changed__time");
  clientContacts.classList.add("clients__contacts");
  clientActions.classList.add("clients__actions");
  clientEdit.classList.add("clients__edit", "btn-reset");
  clientDelete.classList.add("clients__delete", "btn-reset");

  for (const contact of data.contacts) {
    createContactItemByType(contact.type, contact.value, clientContacts);
  }
  // delete client by id
  const deleteByID = () => {
    import("./clientsApi.js").then(({ deleteClientItem }) => {
      deleteClient.deleteModalDelete.addEventListener("click", () => {
        try {
          deleteClient.deleteSpinner.style.display = "block";
          setTimeout(() => {
            deleteClientItem(data.id);
            document.getElementById(data.id).remove();
          }, 700);
        } catch (error) {
          console.log(error);
        } finally {
          setTimeout(() => {
            deleteClient.deleteSpinner.style.display = "none";
          }, 700);
        }
      });
    });
  };

  clientDelete.addEventListener("click", () => {
    deleteSpinner.style.display = "block";
    clientDelete.classList.add("actions-wait");
    setTimeout(() => {
      deleteByID();
      document.body.append(deleteClient.deleteModal);

      deleteSpinner.style.display = "none";
      clientDelete.classList.remove("actions-wait");
    }, 700);
  });

  clientEdit.addEventListener("click", () => {
    editSpinner.style.display = "block";
    clientEdit.classList.add("actions-wait");
    setTimeout(() => {
      deleteByID();
      document.body.append(editClient.editModal);

      editSpinner.style.display = "none";
      clientEdit.classList.remove("actions-wait");
    }, 700);
  });
  //adding textContent/svg
  deleteSpinner.innerHTML = svgSpinner;
  editSpinner.innerHTML = svgSpinner;
  clientId.textContent = data.id.substr(0, 9);
  clientName.textContent = data.name;
  clientSurname.textContent = data.surname;
  clientLastName.textContent = data.lastName;

  clientEdit.textContent = "Изменить";
  clientDelete.textContent = "Удалить";
  createdDate.textContent = formatDate(data.createdAt);
  createdTime.textContent = formatTime(data.createdAt);
  changedDate.textContent = formatDate(data.updatedAt);
  changedTime.textContent = formatTime(data.updatedAt);
  //append
  clientIdTd.append(clientId);
  clientFullName.append(clientName, clientSurname, clientLastName);
  clientCreated.append(createdDate, createdTime);
  clientChanged.append(changedDate, changedTime);
  clientDelete.append(deleteSpinner);
  clientEdit.append(editSpinner);
  clientActions.append(clientEdit, clientDelete);
  clientTr.append(
    clientIdTd,
    clientFullName,
    clientCreated,
    clientChanged,
    clientContacts,
    clientActions
  );

  return clientTr;
};
