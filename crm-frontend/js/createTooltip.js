export const contactTooltip = (type, value) => {
  //add createElement
  const tooltip = document.createElement("div");
  const tooltipType = document.createElement("span");
  const tooltipValue = document.createElement("a");

  //add class
  tooltip.classList.add("contact-tooltip", "site-tooltip");
  tooltipType.classList.add("contact-tooltip__type");
  tooltipValue.classList.add("contact-tooltip__value");
  //add text
  tooltipType.textContent = type + ": ";
  tooltipValue.textContent = value;
  //append
  tooltip.append(tooltipType, tooltipValue);

  return {
    tooltip,
    tooltipType,
    tooltipValue,
  };
};
