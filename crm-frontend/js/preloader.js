import { svgPreloadMain } from "./svg.js";

export const createPreloader = () => {
  //adding createElement
  const preloaderBlock = document.createElement("div");
  const preloaderCircle = document.createElement("span");

  //adding class
  preloaderBlock.classList.add("preloaderdiv");
  preloaderCircle.classList.add("preloader");

  preloaderCircle.innerHTML = svgPreloadMain;
  //append
  preloaderBlock.append(preloaderCircle);

  return preloaderBlock;
};
