// src/components/Content.js
import React from 'react';

const orders = [
  { id: 1, customer: 'John Doe', amount: '$150', status: 'Shipped' },
  { id: 2, customer: 'Jane Smith', amount: '$90', status: 'Pending' },
  { id: 3, customer: 'Alice Johnson', amount: '$250', status: 'Delivered' },
];

const Orders = () => {
  return (
    <div className="p-4 w-100">
      <h3>Orders</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
