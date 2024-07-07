import { data } from "../js/data.js";
const slide = document.querySelector(".gaming");

function redertemplate(item) {
  const template = `
      <div class="slide-gaming">
        <img style="width: 100%" src="${item.Image}" alt="" />
        <h3>${item.name} <br /></h3>
        <a href=""
          ><button>
            Shop Now
            <i
              class="fa-solid fa-angle-right"
              style="color: #8aca12"
            ></i></button
        ></a>
      `;
  slide.insertAdjacentHTML("beforeend", template);
}
data.forEach((item) => {
  redertemplate(item);
});
