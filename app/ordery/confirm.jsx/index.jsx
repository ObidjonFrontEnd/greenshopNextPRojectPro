import React from 'react';
import { Modal, Button } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

const OrderConfirmationModal = ({ orderData, isModalOpen, setIsModalOpen }) => {
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const orderSummary = {
    number: '1958687',
    date: '15 Sep, 2021',
    total: orderData.reduce((sum, item) => sum + item.discountedTotal ?? item.total, 0),
    payment: 'Cash on delivery',
    shipping: 16.0,
  };

  return (
    <Modal
      title={null}
      open={isModalOpen}
      onCancel={handleModalClose}
      footer={null}
      centered
    >
      <div className="text-center p-4">
        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: 48 }} />
        <h2 className="text-xl font-bold mt-2">Your order has been received</h2>

        {/* Order Summary */}
        <div className="grid grid-cols-2 gap-4 text-sm mt-4 border rounded p-4">
          <div>
            <p className="text-gray-500">Order Number</p>
            <p>{orderSummary.number}</p>
          </div>
          <div>
            <p className="text-gray-500">Date</p>
            <p>{orderSummary.date}</p>
          </div>
          <div>
            <p className="text-gray-500">Total</p>
            <p>${(orderSummary.total + orderSummary.shipping).toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-500">Payment Method</p>
            <p>{orderSummary.payment}</p>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-6 text-left">
          <h3 className="font-semibold mb-2">Order Details</h3>
          {orderData?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-3"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">Qty: x{item.quantity}</p>
                  {item.discountPercentage && (
                    <p className="text-xs text-red-500">
                      -{item.discountPercentage}% discount
                    </p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">
                  ${item.discountedTotal?.toFixed(2) ?? item.total.toFixed(2)}
                </p>
                {item.discountedTotal && (
                  <p className="text-xs line-through text-gray-400">
                    ${item.total.toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="mt-4 border-t pt-2 text-right text-sm">
          <p>Shipping: ${orderSummary.shipping.toFixed(2)}</p>
          <p className="text-lg font-bold text-green-700">
            Total: ${(orderSummary.total + orderSummary.shipping).toFixed(2)}
          </p>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date.
        </p>

        <Button
          style={{ backgroundColor: '#46A358' , fontWeight: 'bold'  }}
          type="primary"
          onClick={handleModalClose}
        >
          Track your order
        </Button>
      </div>
    </Modal>
  );
};

export default OrderConfirmationModal;
