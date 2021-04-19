const getDetail = (order) => {
  if (order.items.length) {
    const item = order.items[0];
    return `${item.product.name} (${item.size}) x ${item.quantity}`;
  }
  return "";
};

export { getDetail };
