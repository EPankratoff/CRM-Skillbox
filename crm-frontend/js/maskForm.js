// export const Phone = () => {

//   const phoneInput = document.getElementById("tel");
//   const phoneRegex =
//     /(\+?\d*)?(\s*?\(?\d{0,3}\)?\s*?)?(\d{0,3}\s?\-?\d{0,2}\s?\-?\d{0,2})?/;

//   phoneInput.addEventListener("input", function (event) {
//     const inputValue = event.target.value;

//     if (!phoneRegex.test(inputValue)) {
//       event.target.value = this._lastValidValue || "";
//       return;
//     }

//     const groups = inputValue.match(phoneRegex);
//     const formattedValue = `${groups[1] || ""} ${groups[2] || ""}${
//       groups[3] || ""
//     }`;

//     this._lastValidValue = formattedValue;
//     event.target.value = formattedValue;
//   });
// };
