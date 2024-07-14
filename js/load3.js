import { data3 } from "../js/data.js";
const slide3 = document.querySelector(".gaming-store");

function redertemplate(item2) {
  const template = `
         <div class="slide-store">
          <img
            style="width: 100%;"
            src="${item2.Image}"
            alt=""
          />
          <h2>${item2.name}</h2>
          <br />
          <p>${item2.GPU}</p>
          <p>${item2.CPU}</p>
          <br />
          <div class="price-store">
            <p>${item2.price}</p>
            <a href=""
              ><button>
                Buy Now
                <i></i></button
            ></a>
          </div>
        </div>
      `;
  slide3.insertAdjacentHTML("beforeend", template);
}
data3.forEach((item2) => {
  redertemplate(item2);
});
