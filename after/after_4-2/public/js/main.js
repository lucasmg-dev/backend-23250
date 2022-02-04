const socket = io();

document
  .querySelector("#form-add-product")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    await fetch("/api/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: document.querySelector("#form-add-product input[name=title]")
          .value,
        price: document.querySelector("#form-add-product input[name=price]")
          .value,
        thumbnail: document.querySelector(
          "#form-add-product input[name=thumbnail]"
        ).value,
      }),
    });
    // socket.emit()
  });

socket.on("update_products", async (data) => {
  showProducts(data);
});

async function showProducts(data) {
  const fetchTemplateHbs = await fetch("/templates/list_products.hbs");
  const templateHbs = await fetchTemplateHbs.text();
  const template = Handlebars.compile(templateHbs);
  const html = template({ products: data });
  document.querySelector("#list-products").innerHTML = html;
}
