'use strict';

// {id: 'id', state: 'state}

const processOrderList = (orderList, orderId, state) => {
  const orderIndex = orderList.findIndex(({ id }, idx) => id === orderId);

  if (state === 'Processing') {
    orderList[orderIndex].state = state;
  }

  if (state === 'Delivered') {
    orderList = orderList.filter(({ id }, idx) => id !== orderId);
  }

  if (!orderIndex) {
    return orderList;
  }

  return orderList;
};

const orders = [
  { id: 1, state: 'Recieved' },
  { id: 2, state: 'Recieved' },
  { id: 3, state: 'Recieved' },
  { id: 4, state: 'Recieved' },
  { id: 5, state: 'Recieved' },
];

console.log(processOrderList(orders, 3, 'Processing'));
console.log(processOrderList(orders, 1, 'Delivered'));
console.log(processOrderList(orders, 5, 'Delivered'));
console.log(processOrderList(orders, 4, 'Processing'));
