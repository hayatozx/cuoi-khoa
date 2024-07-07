import { data2 } from "../js/data.js";
const slide2 = document.querySelector(".Cards");

function redertemplate(item1) {
  const template = `
      <div class="slide-gaming">
        <img style="width: 100%" src="${item1.Image}" alt="" />
        <h3>${item1.name} <br /></h3>
        <a href=""
          ><button>
            Shop Now
            <i
              class="fa-solid fa-angle-right"
              style="color: #8aca12"
            ></i></button
        ></a>
      `;
  slide2.insertAdjacentHTML("beforeend", template);
}
data2.forEach((item1) => {
  redertemplate(item1);
});
