export const OrdersService = {
  getPreviousOrders: (orders) => {
    return orders.filter((ord) => ord.isPaymentCompleted === true);
  },

  getCart: (orders) => {
    return orders.filter((ord) => ord.isPaymentCompleted === false);
  },
};
