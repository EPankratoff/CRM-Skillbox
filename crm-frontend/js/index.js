import { createClientsHeader } from "./createHeader.js";
import { createClientsSection } from "./createClientsSection.js";
import { getClients } from "./clientsApi.js";
import { createClientItem } from "./createClientItem.js";
import { sortTable } from "./sortClientTable.js";
import { searchClients } from "./searchClient.js";

const createApp = async () => {
  const header = createClientsHeader();
  const clientSection = createClientsSection();
  document.body.append(header, clientSection.main);
  const preloader = document.querySelector(".preloaderdiv");
  const tableWrapper = document.querySelector(".clients__wrapper");
  // Inputmask
  // const form = document.querySelector(".contact");
  // const telSelector = form.querySelector('input[type="tel"]');
  // const inputMask = new Inputmask("+7 (999) 999-99-99");
  // inputMask.mask(telSelector);

  try {
    tableWrapper.style.overflow = "visible";
    const clients = await getClients();
    searchClients(clients);
    // const form = document.querySelector(".contact");
    // const telSelector = form.querySelector('input[type="tel"]');
    // const inputMask = new Inputmask("+7 (999) 999-99-99");
    // inputMask.mask(telSelector);

    for (const client of clients) {
      document
        .querySelector(".clients__tbody")
        .append(createClientItem(client));
    }
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => preloader.remove(), 700);
    tableWrapper.style.overflow = "auto";
  }
};
createApp();
document.addEventListener("DOMContentLoaded", sortTable());
