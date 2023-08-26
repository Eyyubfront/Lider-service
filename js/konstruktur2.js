const bars = document.querySelector(".fa-bars");

const mobilMenu = document.querySelector(".MobilMenu");
const close = document.querySelector(".fa-x");
bars.onclick = () => {
  mobilMenu.classList.add("showMobilmenu");
};

close.onclick = () => {
  mobilMenu.classList.remove("showMobilmenu");
};

