export const sortTable = () => {
  const table = document.querySelector("table");
  const headers = table.querySelectorAll("th");
  const tbody = table.querySelector("tbody");

  const directions = Array.from(headers).map(() => "");
  //forma
  const transform = (type, content) => {
    switch (type) {
      case "id":
        return parseFloat(content);
      case "create":
      case "update":
        return content.split(".").reverse().join("-");
      case "text":
      default:
        return content;
    }
  };
  //sortColumn
  const sortColumn = (index) => {
    const type = headers[index].getAttribute("data-type");
    const rows = tbody.querySelectorAll("tr");
    const direction = directions[index] || "sortUp";
    const multiply = direction === "sortUp" ? 1 : -1;
    const newRows = Array.from(rows);

    //sort newRows
    newRows.sort((rowone, rowtwo) => {
      const cellone = rowone.querySelectorAll("td")[index].textContent;
      const celltwo = rowtwo.querySelectorAll("td")[index].textContent;

      const spana = transform(type, cellone);
      const spanb = transform(type, celltwo);

      switch (true) {
        case spana > spanb:
          return 1 * multiply;
        case spana < spanb:
          return -1 * multiply;
        default:
          break;
        case spana === spanb:
          return 0;
      }
    });

    [].forEach.call(rows, (row) => {
      tbody.removeChild(row);
    });

    directions[index] = direction === "sortUp" ? "sortDown" : "sortUp";

    newRows.forEach((newRow) => {
      tbody.appendChild(newRow);
    });
  };
  [].forEach.call(headers, (header, index) => {
    header.addEventListener("click", () => {
      sortColumn(index);
    });
  });
};
