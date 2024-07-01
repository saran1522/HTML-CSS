const addItemForm = document.getElementById("add-item-form");
const cart = document.getElementById("cart");

addItemForm.addEventListener("submit", event => {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the item name and price from the form
  const itemName = document.getElementById("item-name").value;
  const itemPrice = document.getElementById("item-price").value;

  // Add a new item to the cart
  addItemToCart(itemName, itemPrice);

  // Clear the form
  addItemForm.reset();
});

function addItemToCart(name, price) {
  // Create a new list item for the item
  const item = document.createElement("li");
  item.innerHTML = `${name}: $${price}`;
}
