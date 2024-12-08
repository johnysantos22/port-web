let check = document.getElementById("click");
let header = document.getElementById("header");
let logo = document.getElementById("logo");
let menu = document.getElementById("menu");

check.addEventListener("click", () => {
    if (check.checked) {
        header.style.backgroundColor = "#02153f";
        logo.style.color = "#fff";
        menu.style.color = "#fff";

      } else {
        header.style.backgroundColor = "transparent";
        logo.style.color = "#02153f";
        menu.style.color = "#02153f";

      }
} );


function showSection(sectionId) {
  // Recupere todos os elementos com a classe "section"
  let sections = document.getElementsByClassName('section');

  // Itere sobre cada seção e a exiba ou a oculte, dependendo se o ID corresponde à seção que deve ser exibida
  for (let i = 0; i < sections.length; i++) {
      if (sections[i].id === sectionId) {
          sections[i].style.display = 'block';
      } else {
          sections[i].style.display = 'none';
      }
  }
}

