// Client POST
export const sendClientData = async (client, method, id = null) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/clients/${method === "POST" ? "" : id}`,
      {
        method,
        body: JSON.stringify(client),
      }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

// Client GET
export const getClients = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/clients/", {
      method: "GET",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

// Client Delete
export const deleteClientItem = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
  }
};
//Client search
export const findClient = async (value) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/clients?search=${value}`,
      {
        method: "GET",
      }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
