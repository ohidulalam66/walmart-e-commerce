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
    const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card shadow mb-3 p-3">
          <img src="${product.image}"class="card-img-top img-fluid w-50 mx-auto" alt="...">
          <div class="card-body">
            <h4 class= "text-primary fw-lighter">${product.title}</h4>
            <p><b>Category:</b> ${product.category}</p>
            <p><b> <i class="text-warning fas fa-star"></i> Rating Rate:</b> ${product.rating.rate}</p>
            <p><b> <i class="text-success fas fa-american-sign-language-interpreting"></i> Rating Count:</b> ${product.rating.count}</p>
            <h2><b>Price:</b> $${product.price}</h2>
            <button onclick="addToCart(${product.id},${product.price})" id="addToCart-btn" class="buy-now btn btn-danger">Add to cart</button>
            <button id="details-btn" class="btn btn-success">Details</button>
          </div>
        </div>
        `;
        document.getElementById('all-prodects').appendChild(div);
  }
};

// total product update
let count = 0;
const addToCart = (id, price) => {
  count = count + 1;
  updatePrice("price", price);

  updateTaxAndCharge();
  document.getElementById("total-Products").innerText = count;
};

// id element
const getInputValue = (id) => {
  const element = document.getElementById(id).innerText;
  const converted = parseFloat(element);
  return converted;
};

// main price update
const updatePrice = (id, value) => {
  const convertedOldPrice = getInputValue(id);
  const convertPrice = parseFloat(value);
  const total = convertedOldPrice + convertPrice;
  const twoDecimalPrice = total.toFixed(2);
  document.getElementById(id).innerText = twoDecimalPrice;
  updateTotal();
};

// set innerText
const setInnerText = (id, value) => {
  const twoDecimalTotalTax = value.toFixed(2);
  document.getElementById(id).innerText = twoDecimalTotalTax;
};

// update delivery charge and total Tax
const updateTaxAndCharge = () => {
  const priceConverted = getInputValue("price");
  if (priceConverted > 200) {
    setInnerText("delivery-charge", 30);
    setInnerText("total-tax", priceConverted * 0.2);
  }
  if (priceConverted > 400) {
    setInnerText("delivery-charge", 50);
    setInnerText("total-tax", priceConverted * 0.3);
  }
  if (priceConverted > 500) {
    setInnerText("delivery-charge", 60);
    setInnerText("total-tax", priceConverted * 0.4);
  }
  updateTotal();
};

//grandTotal update
const updateTotal = () => {
  const grandTotal =
    getInputValue("price") + getInputValue("delivery-charge") +
    getInputValue("total-tax");
    const twoDecimalGrandTotal = grandTotal.toFixed(2);
  document.getElementById("total").innerText = twoDecimalGrandTotal;
};