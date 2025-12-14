const generateBill = function calculateCart(cartItems) {
  let subtotal = 0;
  let totalDiscount = 0;


  cartItems.forEach(item => {
    const itemTotal = item.price * item.quantity;
    const itemDiscount =(Number(item.productId.discount) / 100) * itemTotal;
    subtotal += itemTotal;
    totalDiscount += itemDiscount;
  });

  const taxRate = 0.18; // 18% GST
  const tax = (subtotal - totalDiscount) * taxRate;

  const shipping = 50; // fixed shipping cost

  const total = (subtotal - totalDiscount) + (tax + shipping);

  return {
    subtotal,
    totalDiscount,
    tax,
    shipping,
    total
  };
}

module.exports.generateBill = generateBill;
