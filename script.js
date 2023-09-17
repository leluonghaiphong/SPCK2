const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") ?? "[]"
    )

    const name = button.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    const price = button.previousElementSibling.previousElementSibling.previousElementSibling.textContent.split(":")[1];
    const image = button.previousElementSibling.src;
    

    cart.push({
      name, price, image
    })

    localStorage.setItem("cart", JSON.stringify(cart));

    alert('Đã thêm!');
  });
});
