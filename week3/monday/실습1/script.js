const addToCartButtons = document.querySelectorAll(".add-to-cart");
console.log(addToCartButtons);

const cartItemsList = document.querySelector(".cart-items");
console.log(cartItemsList);

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName =
      button.previousElementSibling.previousElementSibling.textContent;
    // 버튼의 이전의 형제인 h3에 접근
    const productPrice = button.previousElementSibling.textContent;
    addToCart(productName, productPrice);
  });
}); //버튼이 들어오면 forEach 실행, 버튼이 여러 개이므로 forEach 반목문. 버튼 1개면 forEach 사용 안해도 됨.

function addToCart(name, price) {
  const cartItem = document.createElement("li");
  cartItem.textContent = `${name} - ${price}`;
  cartItemsList.appendChild(cartItem);
}
