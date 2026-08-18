function addProductToCart(title: string, price: number) {
  const product = title + price;
  console.log("Product added to cart:", product);
}

function page() {
  return addProductToCart("Product 1", 19.99);
}

export default page;
