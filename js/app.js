// fetch called API
const loadProducts = () => {
  const url = `https://raw.githubusercontent.com/ProgrammingHero1/ranga-store-api/main/ranga-api.json?fbclid=IwAR2mWZ8Sr0aCbPx2oNCcMepzyceQ3bdpTl6LWlec32yYFo2CFSh_B8QpGG4`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showProducts(data));
};
loadProducts();

// show all product in UI
const showProducts = (products) => {
  const allProducts = products.map((pd) => pd);
  for (const product of allProducts) {
    // Each card adds a data container through a loop
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card shadow mb-3 px-2">
          <img src="${product.image}"class="img-fluid w-50 mx-auto" alt="...">
          <div class="card-body">
            <h5 class= "text-primary fw-lighter">${product.title}</h5>
            <p><b>Category:</b> ${product.category}</p>
            <p><b> <i class="text-warning fas fa-star"></i> Rating Rate:</b> ${product.rating.rate}</p>
            <p><b> <i class="text-success fas fa-american-sign-language-interpreting"></i> Rating Count:</b> ${product.rating.count}</p>
            <h5><b>Price:</b> $${product.price}</h5>
            <button onclick="addToCart(${product.id},${product.price})" id="addToCart-btn" class="buy-now btn btn-danger ">Add to cart</button>
            <button id="details-btn" class="btn btn-success">Details</button>
          </div>
        </div>
        `;
    document.getElementById("all-prodects").appendChild(div);
  }
};
